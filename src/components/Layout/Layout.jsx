import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from"./Layout.module.css"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
export default function Layout({userData,setUserData}) {
  let navigate = useNavigate()

  function logOut() {
    console.log("eb7fb51b41@emailboxa.online , Azzaaa");
    localStorage.removeItem("userToken")
    setUserData(null)
    navigate("/login")
  
  }
  return (
    <>
    <NavBar userData={userData} logOut={logOut}/>
    <Outlet/>
    <Footer/>
    </>
  )
}
