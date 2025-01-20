import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import styles from"./FeatureProducts.module.css"
import toast from 'react-hot-toast';

export default function FeatureProducts() {
  const {createCart}=useContext(CartContext)
  const [products,setProducts]=useState([])

    async function getProducts() {
    let {data}= await  axios.get("https://ecommerce.routemisr.com/api/v1/products")
    console.log(data.data);
    setProducts(data.data)
      }

async function generateCart(productId) {
//this function is used as to spreate create cart to displayToasts
let respose= await createCart(productId)
console.log(respose,"from feature component");
if (respose.data.status == "success") {
  toast.success(respose.data.message,{
    position:'bottom-right',
    className:"text-center border-success border-2 box-shadow"
  })
}else{
  toast.error(respose.data.message,{
    position:'bottom-right',
    className:"text-center border-success border-2 box-shadow"
  })
}
}

  useEffect(()=>{
getProducts()
  },[])
  return (
    <>
    <div className="container mt-4">
      <div className="row">
        {products.map((ele)=> <div key={ele._id}  className="col-md-2">
          <div className='product px-2 py-3'>
            <Link className="nav-link" to={"/product-details/"+ele.id}>
          <img src={ele.imageCover} className="w-100"  alt="" />
          <p className='text-main'>{ele.category.name}</p>
            <h3 className='h6'>{ele.title.split(" ").splice(0,2).join(" ")}</h3>
            <div className='d-flex justify-content-between'>
            <p>{ele.price}EGP</p>
            <div>
            <i className='fa fa-star rating-color'></i>
            {ele.ratingsAverage}
            </div>
            </div>
            </Link>

            <button className='btn bg-main text-white w-100' onClick={()=>generateCart(ele._id)} >+ADD</button>
            </div>
        </div>)}
       
      </div>
    </div>
    </>
  )
}
