import React from 'react'
import styles from"./NotFound.module.css"
import errorImage from "../../assets/error-404.jpg"
export default function NotFound() {
  return (
    <>
    <div className='container d-flex'>
      <div className=' d-flex justify-content-center p-5'>
    <img src={errorImage} className="img-fluid w-50 " />
      </div>
    </div>
    </>
  )
}
