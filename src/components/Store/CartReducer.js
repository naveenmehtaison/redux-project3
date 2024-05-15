import { createSlice } from "@reduxjs/toolkit"
const initialstate={showcart:false,arr:[]}
const CartReducer=createSlice({
    name:'showingcart',
    initialState:initialstate,
    reducers:{
        setshowcart(state,action){
            console.log('insiede reud cer')
         state.showcart=!state.showcart
         console.log(state.showcart)
        },
        addtocart(state,action){
            console.log(state.arr[0])
            console.log('inside reducer')
            let  found = false
            state.arr.forEach((ele,item)=>{
                if(ele.Tittle==action.payload.Tittle){
                    found=true
                    ele.quantity = parseInt(state.arr[item].quantity) + 1;
                    console.log('same element dettected')
                }
            })
            console.log(found,...state.arr)
            if(!found){
                console.log('notfound',state.arr)
                console.log(state.arr,state.arr.length)
                state.arr=[...state.arr,action.payload]
                
            }
        },
        reducecart(state,action){
            state.arr.forEach((ele,item)=>{
                
                if(ele.Tittle==action.payload.Tittle){
                    if(ele.quantity==1){
                        console.log('inside 0')
                        const newarr = state.arr.filter((ele2,item2)=>(
                            ele2.Tittle!=action.payload.Tittle

                        ))
                        state.arr=newarr
                    }
                    else{
                        ele.quantity = parseInt(state.arr[item].quantity) - 1
                    }

                }
            })

        }
    }
})
export const cartactions = CartReducer.actions
export default CartReducer