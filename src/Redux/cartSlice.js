import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import axios from "axios";

let headers = {token:localStorage.getItem("userToken")}

export let generateOnlinePayment = createAsyncThunk("cart/generateOnlinePayment",async function ({cartId,shippingAddress}) {
    console.log("from payment =="+cartId +" == " +JSON.stringify(shippingAddress));
let data= await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
{shippingAddress},
{headers})
console.log(data.data);
return data
})

export let getAllOrders = createAsyncThunk("cart/getAllOrders",async function ({userId}) {
let data= await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`,
{headers})
return data
})

let cartSlice = createSlice({
    name:"cart",
    initialState:{cart:[],loading:false,isError:null},
    reducers:{
  
    },
    extraReducers:{
        [generateOnlinePayment.pending]:(state,action)=>{
            state.loading = true;
        },
        [generateOnlinePayment.fulfilled]:(state,action)=>{
            state.cart = action.payload;
            state.loading = false;
        },
        [generateOnlinePayment.rejected]:(state,action)=>{
            // state.isError = action.payload;
            state.loading = false;
        },
    }
//     extraReducers:(builder)=>{
// builder.addCase("fulfilled",(state,action)=>{ //case
//     console.log("fulfilledd");
//     console.log(action);
//     state.cart = action.payload
// })

//     }
})

export let cartReducer = cartSlice.reducer

export let {} = cartSlice.actions