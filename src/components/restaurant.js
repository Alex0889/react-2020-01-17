import React from 'react'
import Menu from './menu'
import Reviews from './reviews'

const Restaurant = ({restaurant}) => {
  return (
    <div>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
}

export default Restaurant
