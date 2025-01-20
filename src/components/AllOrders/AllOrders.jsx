import React from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import styles from"./AllOrders.module.css"

export default function AllOrders() {
  let {cart,loading,isError} = useSelector((state)=>state.cartRed)
  let dispatch = useDispatch()
  return (
    // get all user orders from api 
    <>

    {loading ? 
    <div className='loading'>
    <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}/>
   </div>
    :
    <div className="container">
      <div className="row">
        <h2 className='text-center bg-info py-3'>all orders</h2>
        {cart}
        </div>
    </div>  
    }

    
    </>
  )
}
