import React from 'react'
import Categories from '../Categories/Categories'
import FeatureProducts from '../FeatureProducts/FeatureProducts'
import styles from"./Home.module.css"
export default function Home() {
  return (
    <>
    <div className='container'>
    <Categories></Categories>

    </div>
    
    <FeatureProducts></FeatureProducts>
    </>
  )
}
