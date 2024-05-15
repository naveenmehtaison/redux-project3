import { createSlice } from "@reduxjs/toolkit"
const initialstate={showcart:false}
const CartReducer=createSlice({
    name:'showingcart',
    initialState:initialstate,
    reducers:{
        setshowcart(state,action){
            console.log('insiede reud cer')
         state.showcart=!state.showcart
         console.log(state.showcart)
        }
    }
})
export const cartactions = CartReducer.actions
export default CartReducer