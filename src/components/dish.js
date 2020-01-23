import React from 'react'
import {Button, Card, Row, Col, Icon} from 'antd'
import {useAmount} from '../custom-hooks/use-amount'

const Dish = ({dish}) => {
  const {amount, decrease, increase} = useAmount(1)

  return (
    <Card title={dish.name} bordered={false}>
      <p>Price: {dish.price}$</p>
      <Row type="flex" justify="space-between" align="middle">
        <Col span={4} style={{whiteSpace: 'noWrap'}}>
          Total: {amount}
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            shape="circle"
            size="default"
            ghost
            onClick={decrease}
          >
            <Icon type="minus" />
          </Button>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            shape="circle"
            size="default"
            ghost
            onClick={increase}
          >
            <Icon type="plus" />
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default Dish
