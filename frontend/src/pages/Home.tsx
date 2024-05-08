import React from 'react'
import Banner from '../components/Home/Banner'
import Feature1 from '../components/Home/Featured/Feature1'
import Feature2 from '../components/Home/Featured/Feature2'
import Collaborate from '../components/Home/Collaborate'


export default function Home() {
  return (
    <div>
      <Banner />
      <Feature1 />
      <Collaborate/> 
      <Feature2 />
      <h1>Home</h1>
      
    </div>
  )
}
