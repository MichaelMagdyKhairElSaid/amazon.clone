import axios from "axios";
import { createContext, useContext, useState } from "react";

export let CartContext = createContext(0)
export default function CartContextProvider(props){
    let [cartData,setCartData]=useState([])
    let headers = {token:localStorage.getItem("userToken")}
 function createCart(productId) {
   return  axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
   {productId} //data sent to backend
   ,{headers} //headers
   ).then(res=>res).catch(err=>err)
}
 function getCart(productId) {
     console.log("headers",headers);
   return  axios.get(`https://ecommerce.routemisr.com/api/v1/cart` //data sent to backend
   ,{headers} //headers
   ).then(res=>res).catch(err=>err)
   
}
 function updateCart(id,count) {
     console.log("headers",headers);
   return  axios.get(`https://ecommerce.routemisr.com/api/v1/cart${id}` //data sent to backend
   ,{count}
   ,{headers} //headers
   ).then(res=>res).catch(err=>err)
   
}
 function removeCartItem(id) {
     console.log("headers",headers);
   return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart${id}` //data sent to backend
   ,{headers} //headers
   ).then(res=>res).catch(err=>err)
   
}
    return <CartContext.Provider value={{cartData,createCart,getCart,updateCart,removeCartItem}}>
   { props.children}
    </CartContext.Provider> 
}
