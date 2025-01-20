import axios from 'axios'
import React, { createRef, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { CartContext } from '../../Context/CartContext'
import styles from"./ProductDetails.module.css"
export default function ProductDetails() {
  let {id} = useParams()
  const {createCart}=useContext(CartContext)
  const [productDetails,setProductDetails]=useState({})
  async function getProductDetails() {
  let {data}= await  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
 console.log(data.data);
 setProductDetails(data.data)
   }
   var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
   useEffect(()=>{
 getProductDetails()
   },[])
  return (
    <>
    <div className="container">
<div className="row align-items-center">
  <div className="col-md-4">
    {/* <img className='w-100' src={productDetails.imageCover} alt="" /> */}
    <Slider {...settings}>
    {productDetails.images?.map((image,index)=> 
    <div key={index} >
      <img width={"100%"} src={image} alt="" />
    </div>
    )}
   
    </Slider>
  </div>
  <div className="col-md-8">
    <h1>{productDetails.title}</h1>
    <p>{productDetails.description}</p>
    <div className='d-flex justify-content-between'>
            <p>{productDetails.price}EGP</p>
            <div>
            <i className='fa fa-star rating-color'></i>
            {productDetails.ratingsAverage}
            </div>
            </div>
  <button  onClick={()=>createCart(productDetails._id)} className='btn btn-success in text-white w-100'>+ADD</button>
  </div>
</div>
    </div>
    </>
  )
}
