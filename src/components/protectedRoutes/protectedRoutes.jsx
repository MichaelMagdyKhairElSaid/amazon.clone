import React from 'react'
import { Navigate } from 'react-router-dom'
import styles from"./protectedRoutes.module.css"
export default function ProtectedRoutes(props) {
  if (localStorage.getItem("userToken")) {
  return props.children
  }else{
return <Navigate to="/login "/>
  }
  // return<>
  // hello from protectedRoutes
  // </>

}

