import React, { useEffect } from 'react'
import { useContext } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'

import { decrease, getProducts ,increaseByAmount} from '../../Redux/ProductSlice'
import styles from"./Products.module.css"

export default function Products() {
  let {counter,products,loading} = useSelector((state)=>state.productRed)
  console.log("stat.product");
  let x = useSelector((state)=>console.log( state.productRed))
  let dispatch = useDispatch()


 useEffect(()=>{
dispatch(getProducts()) 
 },[])

  return (<>
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
    :<>
    <button onClick={()=>dispatch(increaseByAmount(15))} className='btn btn-primary'>+</button>
  <span className='p-2'>{counter} </span>
    <button  onClick={()=>dispatch(decrease())} className='btn btn-danger'>-</button>
    </>
     }
    
    </> )
}
