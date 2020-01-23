import React from 'react'
import {Menu, Rate, Row, Col} from 'antd'

const RestaurantsNavigation = ({restaurants, onRestaurantChange}) => {
  const {Item} = Menu

  const averageRate = reviews => {
    return (
      reviews.reduce((count, {rating}) => count + rating, 0) / reviews.length
    )
  }

  return (
    <Menu
      defaultSelectedKeys={restaurants[0].id}
      style={{width: '90%'}}
      mode="inline"
    >
      {restaurants.map(restaurant => (
        <Item
          key={restaurant.id}
          onClick={() => {
            onRestaurantChange(restaurant.id)
          }}
        >
          <Row>
            <Col span={12}>{restaurant.name}</Col>
            <Col span={12}>
              <Rate value={averageRate(restaurant.reviews)} disabled />
            </Col>
          </Row>
        </Item>
      ))}
    </Menu>
  )
}

export default RestaurantsNavigation
