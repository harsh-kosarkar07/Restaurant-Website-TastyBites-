import React from 'react'
import Hero from './Hero'
import FoodSlider from './FoodSlider'
import Delivery from './Delivery'

const Home = ({handleAddtoCart}) => {
  return (
    <div>
        <Hero/>
        <Delivery/>
        <FoodSlider handleAddtoCart={handleAddtoCart}/>
    </div>
  )
}

export default Home