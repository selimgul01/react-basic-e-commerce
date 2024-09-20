import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getCategories = createAsyncThunk("getCategories",async()=>{
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = await response.json()
    return data
})

const initialState = {
    categories: []
}
export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getCategories.fulfilled, (state,action)=>{
            state.categories = action.payload
        })
    }
})


export const {} = categorySlice.actions
export default categorySlice.reducer