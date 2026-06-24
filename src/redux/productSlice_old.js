import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const resp = await fetch("https://dummyjson.com/products    ");
        const jsonResp = await resp.json();
        return jsonResp.products;
    }
);

const initialState = {
    items: [],
    status: "idle",
    error: null,
};


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});


export default productSlice.reducer;