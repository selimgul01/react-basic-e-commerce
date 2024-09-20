import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";


export const getProducts = createAsyncThunk("getProducts",async()=>{
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    return data
})
export const getProduct = createAsyncThunk("getProduct",async(id)=>{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    return data
})
export const getCategory = createAsyncThunk("getCategory",async(category)=>{
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await response.json()
    return data
})



const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE,
}
export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(getProducts.pending,(state,action)=>{
            state.productsStatus = STATUS.LOADING
        })
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.products = action.payload
            state.productsStatus = STATUS.SUCCESS
        })
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.productsStatus = STATUS.FAIL
        })

        builder.addCase(getCategory.pending,(state,action)=>{
            state.productsStatus = STATUS.LOADING
        })
        builder.addCase(getCategory.fulfilled,(state,action)=>{
            state.products = action.payload
            state.productsStatus = STATUS.SUCCESS
        })
        builder.addCase(getCategory.rejected,(state,action)=>{
            state.productsStatus = STATUS.FAIL
        })

        builder.addCase(getProduct.pending,(state,action)=>{
            state.productDetailStatus = STATUS.LOADING
        })
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.productDetail = action.payload
            state.productDetailStatus = STATUS.SUCCESS
        })
        builder.addCase(getProduct.rejected,(state,action)=>{
            state.productDetailStatus = STATUS.FAIL
        })
    }
})

export const {} = productSlice.actions
export default productSlice.reducer