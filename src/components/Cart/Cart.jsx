import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import styles from"./Cart.module.css"

export default function Cart() {
  const [cartDetails,setCartDetails]=useState({})
  let {getCart,updateCart,removeCartItem} = useContext(CartContext)

async function getCartDetails() {
 let res =  await getCart()
 console.log("getCartDetails");
 console.log(res.data.data._id);
 localStorage.setItem("cartId",res.data.data._id)
 setCartDetails(res.data)
}
async function updateCartHandel(id,count) {
 let res =  await updateCart(id,count)
 console.log(res);
 setCartDetails(res.data)
}
async function removeCartItemHandel(id) {
 let res =  await removeCartItem(id)
 console.log(res);
 setCartDetails(res.data)
}

useEffect(()=>{
  getCartDetails()
},[])
  return (
    <>
    {cartDetails && cartDetails.data &&  <div className="container py-5 my-5">
<div className="bg-main-light p-5">
   <h3>Cart Details</h3>
   <h4>Total price:{cartDetails.data.totalCartPrice}</h4>
   {console.log(cartDetails.data.products)}
   {cartDetails.data.products.map((product)=><div key={product._id} className="row  border-bottom border-black p-2">
 <div className="col-md-1">
   <img src={product.product.imageCover} className="w-100" alt="" />
 </div>
 <div className="col-md-11 d-flex justify-content-between">
  <div>
  <h4>{product.product.title}</h4>
   <p className='text-main'>{product.price} EGP</p>
   <button onClick={()=>removeCartItemHandel(product.product._id)} className='btn text-danger'><i className='fa fa-trash'></i> Remove</button>
  </div>
  <div className='d-flex align-items-center'>
<button className='btn btn-cart bg-primary text-white' onClick={()=>updateCartHandel(product.product._id,product.count+1)}>+</button>
<p className='mx-3 mb-0 '>{product.count}</p>
<button className='btn btn-cart bg-danger text-white' onClick={()=>updateCartHandel(product.product. _id,product.count-1)}>-</button>
  </div>
 </div>
   </div>
   )}
</div>
<Link to={"/checkOut"} className='btn btn-success text-white mt-3 '>procced to payment</Link>
 </div> }

    </>
  )
}
  