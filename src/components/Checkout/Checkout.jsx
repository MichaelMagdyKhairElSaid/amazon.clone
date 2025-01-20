import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { generateOnlinePayment } from '../../Redux/cartSlice';
import styles from"./Checkout.module.css"
import * as Yup from "yup"
import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect } from 'react';

export default function Checkout() {
  let {cart} = useSelector((state)=>state.cartRed)
  let dispatch = useDispatch()

async function handlePayment(values) {
  console.log(values);
//  let data =  generateOnlinePayment({cartId:"654e4bea595cfa56e534eb09" , shippingAddress:values})

/* 
let cartId = localStorage.getItem("cartId")
 let data=await dispatch(generateOnlinePayment({ cartId, shippingAddress: values }))
 const originalPromiseResult = unwrapResult(data)
 if (originalPromiseResult.data.session) {
   console.log("data ========",originalPromiseResult.data.session.url)
   window.location.href = originalPromiseResult.data.session.url
 }
  */
 let cartId = localStorage.getItem("cartId")
 dispatch(generateOnlinePayment({ cartId, shippingAddress: values }))
 console.log(cart);

}

useEffect(()=>{

},[])

let mySchema = Yup.object({
    details:Yup.string().required("details is required").min(3,"min char is 3").max(50,"max char is 30"),
    city:Yup.string().required("city is required").min(3,"min char is 3").max(15,"max char is 15"),
     phone:Yup.string().required("phone is required").matches(/^01[0125][0-9]{8}$/,"invalid phone")
})


let formik = useFormik({
  initialValues:{
    details:"",
    phone:"",
    city:""
  },
  validationSchema:mySchema,
  onSubmit:handlePayment
})

  return (
    <>
    <div className='container'>
      <form className='w-75 mx-auto my-5' onSubmit={formik.handleSubmit}>

       <label htmlFor="details">details</label> 
       <input  type="text" className='form-control mb-3 ' name='details' id='details' value={formik.values.details} onBlur={formik.handleBlur} onChange={formik.handleChange} />
       {formik.errors.details && formik.touched.details ?<div className='alert alert-danger'>{formik.errors.details}</div>:''}

       <label htmlFor="city">city</label> 
       <input type="text" className='form-control mb-3' name='city' id='city' value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
       {formik.errors.city && formik.touched.city ?<div className='alert alert-danger'>{formik.errors.city}</div>:''}

       <label htmlFor="phone">phone</label> 
       <input  type="tel" className='form-control mb-3' name='phone' id='phone' value={formik.values.phone}  onChange={formik.handleChange} onBlur={formik.handleBlur} />
       {formik.errors.phone && formik.touched.phone ?<div className='alert alert-danger'>{formik.errors.phone}</div>:''}

      <button type='submit' className='btn btn-outline-info w-100 '>Pay</button>
      </form>

    </div>
    </>
  )
}
