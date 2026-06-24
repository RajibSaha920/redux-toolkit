import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items : localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')):[]
}
const addToCart = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            console.log(action)
            state.items.push(action.payload)
            localStorage.setItem('cart',JSON.stringify(state.items))
        },
        removeItem:(state,action)=>{
            const cartItem = state.items.filter(item=>item.id!=action.payload.id);
            state.items=cartItem;
            localStorage.setItem('cart',JSON.stringify(cartItem))
        },
        clearCart:(state)=>{
         state.items = [] 
        }
    }
})
export const { addItem,removeItem,clearCart } = addToCart.actions
export default addToCart.reducer
