import React, { useState }from 'react'
import styles from"./Login.module.css"
import axios from 'axios'
import  formik, { useFormik }  from 'formik'
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom'

export default function Login({saveUser}) {
  const [isLoading,setIsLoading] = useState(false)
const [errorMessage,setErrorMessage] = useState(null)
let navigate = useNavigate()

async function login(values) {
  console.log("btee5",values);
  setIsLoading(true)
  setErrorMessage(null)
  let res=await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values).catch((err)=>{
    console.log(err);
    setIsLoading(false) 
    setErrorMessage(err.response.data.message)
  })
if (res) {
  if (res.data.message == "success") {
    setIsLoading(false)
    localStorage.setItem("userToken",res.data.token)
    saveUser()
    navigate("/")
    
  }
}
  
}

  //NOTE validation with yup

let mySchema = Yup.object({
     email:Yup.string().email("invalid email").required("email is required"),
     password:Yup.string().matches(/^[A-Z][a-z0-9]{5,8}$/,"invalid password").required("password is required"),
})


  let formik = useFormik({
   initialValues:{ 
     email:"",
     password:"",
    },
    validationSchema:mySchema,
    onSubmit:(values)=>{
     login(values)
    }
  })
  
  return (<div className='d-flex justify-content-center '>
    <div className='container m-5 p-3 w-25 border border-black border-1 shadow shadow-lg  '>
    <h3>Login Now :</h3>
     {errorMessage ? <div className='alert-danger alert '>{errorMessage}</div>:''}
     
    <form    onSubmit={formik.handleSubmit}   >
    
    <label htmlFor="email">Email</label>
    <input type="email" name='email' id='email'   value={formik.values.email}  onChange={formik.handleChange} onBlur={formik.handleBlur}  className='form-control mb-2'/>
      {formik.errors.email && formik.touched.email ?<div className='alert alert-danger'>{formik.errors.email}</div>:''}   
    
    
    <label htmlFor="password">Password</label>
    <input type="password" name='password' id='password' value={formik.values.password}  onChange={formik.handleChange} onBlur={formik.handleBlur}  className='form-control mb-2'/>
      {formik.errors.password && formik.touched.password ?<div className='alert alert-danger'>{formik.errors.password}</div>:''}   
 
      {isLoading ? <button className='btn bg-primary text-white'><i className='fa fa-spin fa-spinner'></i></button>:<button disabled={!(formik.dirty && formik.isValid)} className='btn bg-primary text-white'>Login</button>}
      
    
    </form>
    
        </div>
        </div>
  )
}
