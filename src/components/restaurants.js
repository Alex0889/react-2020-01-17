import React, {useMemo, useState, useCallback} from 'react'
import RestaurantsNavigation from './restaurants-navigation'
import Restaurant from './restaurant'
import {Row, Col} from 'antd'

const Restaurants = ({restaurants}) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id)

  const activeRestaurant = useMemo(() => {
    return restaurants.find(restaurant => restaurant.id === activeRestaurantId)
  }, [activeRestaurantId, restaurants])

  return (
    <Row>
      <Col span={6} offset={3}>
        <RestaurantsNavigation
          restaurants={restaurants}
          onRestaurantChange={useCallback(id => setActiveRestaurant(id), [])}
        />
      </Col>
      <Col span={12}>
        <Restaurant restaurant={activeRestaurant} />
      </Col>
    </Row>
  )
}

export default Restaurants
