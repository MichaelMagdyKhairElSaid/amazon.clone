import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductSlice";
import { cartReducer } from "./cartSlice";


let store = configureStore({
    reducer:{
    productRed:productReducer,
    cartRed:cartReducer
    },
})

export default store