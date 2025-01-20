import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export let getProducts = createAsyncThunk("product/getProducts",async function () {
let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
console.log(data);
return data
})

let productSlice = createSlice({
    name:"product",
    initialState:{counter:0,products:[],loading:false},
    reducers:{
        increase:(state)=>{
            state.counter +=1
        },
        increaseByAmount:(state,action)=>{
            state.counter +=action.payload
        },
        decrease:(state)=>{
            state.counter -=1
        },

    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state)=>{ //case
            state.loading = true;
        });
        builder.addCase(getProducts.fulfilled,(state,action)=>{ //case
            console.log(action.payload);
            state.products = action.payload;
            state.loading = false;
        });
        builder.addCase(getProducts.rejected,(state,action)=>{ //case
             // state.isError = action.payload;
             state.loading = false;
        })
            }
/*     { 
        [getProducts.pending]:(state,action)=>{
            state.loading = true;
        },
        [getProducts.fulfilled]:(state,action)=>{
            console.log(action.payload);
            state.products = action.payload;
            state.loading = false;
        },
        [getProducts.rejected]:(state,action)=>{
            // state.isError = action.payload;
            state.loading = false;
        },
}
  */

})

export let productReducer = productSlice.reducer

export let {increase , decrease ,increaseByAmount} = productSlice.actions