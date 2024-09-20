import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const fetchFromStorage = () => {
    let cart = localStorage.getItem("cart")
    if (cart) {
        return JSON.parse(localStorage.getItem("cart"))
    }else{
        return []
    }
}
const storeInStorage = (data) => {
    localStorage.setItem("cart",JSON.stringify(data))
}

const initialState = {
    carts: fetchFromStorage(),
    itemCount: 0,
    totalAmount: 0
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
       addToCart: (state,action) => {
            const isItemCart = state.carts.find(item => item.id === action.payload.id)
            if (isItemCart) {
                const tempCart = state.carts.map((item) => {
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity
                        let tempTotalPrice = item.price * tempQty
                        return{
                            ...item, quantity: tempQty, totalPrice: tempTotalPrice 
                        }
                    }else{
                        return item
                    }
                })
                state.carts = tempCart
                storeInStorage(state.carts)
            }else{
                state.carts.push(action.payload)
                storeInStorage(state.carts)
            }
       },
       removeFromCart: (state,action) => {
        const tempCart = state.carts.filter(item => item.id !== action.payload.id)
        state.carts = tempCart
        storeInStorage(state.carts)
       },
       clearCart: (state,action) => {
        state.carts = []
        storeInStorage(state.carts)
       },
       getCartTotal: (state,action) => {
        state.totalAmount = state.carts.reduce((cartTotal,cartItem) => {
            return cartTotal += cartItem.quantity * cartItem.price
        },0)
       }
    }
})

export const {addToCart,removeFromCart,clearCart,getCartTotal} = cartSlice.actions
export default cartSlice.reducer