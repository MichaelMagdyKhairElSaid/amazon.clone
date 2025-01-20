import React, { useState } from 'react'
import styles from"./Register.module.css"
import axios from 'axios'
import  formik, { useFormik }  from 'formik'
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom'

 
export default function Register() {
const [isLoading,setIsLoading] = useState(false)
const [errorMessage,setErrorMessage] = useState(null)
let navigate = useNavigate()

async function register(values) {
  console.log("btee5",values);
  setIsLoading(true)
  setErrorMessage(null)
  let res=await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values).catch((err)=>{
    console.log(err);
    setIsLoading(false) 
    setErrorMessage(err.response.data.message)
  })
if (res) {
  if (res.data.message == "success") {
    setIsLoading(false)
    navigate("/login")
    
  }
}
  
}
  //NOTE validation with yup

let mySchema = Yup.object({
     name:Yup.string().required("name is required").min(3,"min char is 3").max(15,"max char is 15"),
     email:Yup.string().email("invalid email").required("email is required"),
     password:Yup.string().matches(/^[A-Z][a-z0-9]{5,8}$/,"invalid password").required("password is required"),
     rePassword:Yup.string().required("rePassword is required").oneOf([Yup.ref("password")],"rePassword must be match"),
     phone:Yup.string().required("phone is required").matches(/^01[0125][0-9]{8}$/,"invalid phone")
})


  

  let formik = useFormik({
   initialValues:{ 
     name:"",
     email:"",
     password:"",
     rePassword:"",
     phone:""
    },
    validationSchema:mySchema,
    onSubmit:(values)=>{
     register(values)
    // console.log("bteee5");
    }
  })
  

  return (
    <div className='container m-3'>
<h3>Register Now :</h3>
 {errorMessage ? <div className='alert-danger alert '>{errorMessage}</div>:''}
 
<form    onSubmit={formik.handleSubmit}   >
<label htmlFor="name">Name</label>
<input type="text" name='name' id='name'  value={formik.values.name}  onChange={formik.handleChange} onBlur={formik.handleBlur}  className='form-control mb-2'/>
  {formik.errors.name && formik.touched.name ?<div className='alert alert-danger'>{formik.errors.name}</div>:''}   

<label htmlFor="email">Email</label>
<input type="email" name='email' id='email'   value={formik.values.email}  onChange={formik.handleChange} onBlur={formik.handleBlur}  className='form-control mb-2'/>
  {formik.errors.email && formik.touched.email ?<div className='alert alert-danger'>{formik.errors.email}</div>:''}   


<label htmlFor="password">Password</label>
<input type="password" name='password' id='password' value={formik.values.password}  onChange={formik.handleChange} onBlur={formik.handleBlur}  className='form-control mb-2'/>
  {formik.errors.password && formik.touched.password ?<div className='alert alert-danger'>{formik.errors.password}</div>:''}   


<label htmlFor="rePassword">rePassword</label>
<input type="password" name='rePassword' id='rePassword'    value={formik.values.rePassword}  onChange={formik.handleChange} onBlur={formik.handleBlur}    className='form-control mb-2'/>
  {formik.errors.rePassword && formik.touched.rePassword ?<div className='alert alert-danger'>{formik.errors.rePassword}</div>:''}   


<label htmlFor="phone">Phone</label>
<input type="tel" name='phone' id='phone'  value={formik.values.phone}  onChange={formik.handleChange} onBlur={formik.handleBlur}  className='form-control mb-2'/>
  {formik.errors.phone&&formik.touched.phone ?<div className='alert alert-danger'>{formik.errors.phone}</div>:''}   

  {formik.isValid.toString()} and dirty is { formik.dirty.toString()}
  {isLoading ? <button className='btn bg-primary text-white'><i className='fa fa-spin fa-spinner'></i></button>:<button disabled={!(formik.isValid && formik.dirty)} className='btn bg-primary text-white'>Register</button>}
  

</form>

    </div>
  )
}
