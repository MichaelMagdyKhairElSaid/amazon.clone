import React from 'react'
import {createBrowserRouter,RouterProvider}from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Cart from "./components/Cart/Cart"
import Register from "./components/Register/Register"
import NotFound from "./components/NotFound/NotFound"
import Products from "./components/Products/Products"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import jwtDecode from 'jwt-decode'
import { useState } from 'react'
import { useEffect } from 'react'
import ProtectedRoutes from './components/protectedRoutes/protectedRoutes'
import CounterContextProvider from './Context/CounterContext'
import CartContextProvider from './Context/CartContext'
import  { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import store from './Redux/Store'
import Checkout from './components/Checkout/Checkout'
import AllOrders from './components/AllOrders/AllOrders'

export default function App() {

  const [userData,setUserData]=useState(null)
useEffect(()=>{
  if (localStorage.getItem("userToken")) {
    saveUser()  
  }
},[])
  function saveUser() {
    let encodedToken = localStorage.getItem("userToken")
    let decoded = jwtDecode(encodedToken);
    console.log(decoded);
    setUserData(decoded)
  }
 
  const routes = createBrowserRouter([
    {path:"",element:<Layout userData={userData} setUserData={setUserData}/>,children:[
      {index:true,element:<ProtectedRoutes><Home/></ProtectedRoutes>},
      {path:"Login",element:<Login saveUser={saveUser}/>},
      {path:"Register",element:<Register/>},
      {path:"Products",element:<ProtectedRoutes><Products/></ProtectedRoutes>},
      {path:"Cart",element:<ProtectedRoutes><Cart/></ProtectedRoutes>},    
      {path:"product-details/:id",element:<ProtectedRoutes><ProductDetails/></ProtectedRoutes>},    
      {path:"checkOut",element:<ProtectedRoutes><Checkout/></ProtectedRoutes>},    
      {path:"allorders",element:<ProtectedRoutes><AllOrders/></ProtectedRoutes>},    
  
      {path:"*",element:<NotFound/>},    
    ]}
  ])
  return (
    <>
    <Provider store={store}>
    <CartContextProvider >
    <CounterContextProvider>
      <Toaster></Toaster>
   <RouterProvider router={routes}></RouterProvider>
    </CounterContextProvider>
    </CartContextProvider>
    </Provider>
    </>
  )
}

