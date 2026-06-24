import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export  const fetchProducts = createAsyncThunk('products',async()=>{
const resp = await fetch("https://dummyjson.com/products")
const respJson = await resp.json();
return respJson.products;
})

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
    name:'productSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.items=action.payload
        })
    }
            
})

export default productSlice.reducer;