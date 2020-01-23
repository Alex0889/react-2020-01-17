import React from 'react'
import Dish from './dish'
import {Col, Row} from 'antd'

const Menu = ({menu}) => {
  return (
    <div style={{background: '#ECECEC', padding: '30px'}}>
      <Row gutter={16}>
        {menu.map(dish => (
          <Col span={8} key={dish.id}>
            <Dish dish={dish} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Menu
