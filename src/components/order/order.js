import React from 'react'
import {connect} from 'react-redux'
import {selectOrderedDishes} from '../../store/selectors'
import {Table, Divider, Row, Col, Button, Icon} from 'antd'
import {useHistory} from 'react-router-dom'
import {
  addToCart,
  removeAllDishesById,
  removeFromCart,
  clearCart,
} from '../../store/action-creators'

const Order = props => {
  const {Column} = Table
  const {totalPrice, dishes} = props.order
  const history = useHistory()

  console.log(props)

  if (dishes.length === 0) {
    return (
      <Row type="flex" justify="center" style={{marginTop: '10px'}}>
        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={() => history.goBack()}
        >
          <Icon type="arrow-left" />
        </Button>
      </Row>
    )
  }

  return (
    <Row>
      <Col span={12} offset={6}>
        <Table
          dataSource={dishes}
          pagination={false}
          rowKey={item => item.dish.id}
          footer={item => {
            return (
              <Row type="flex" justify="space-between">
                <Col span={8}>Total price</Col>
                <Col span={8} type="flex" justify="flex-end">
                  {`${totalPrice}`}
                </Col>
                <Col span={8} type="flex" justify="flex-end">
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    onClick={() => {
                      props.clearCart()
                      history.goBack()
                    }}
                  >
                    Confirm order
                  </Button>
                </Col>
              </Row>
            )
          }}
        >
          <Column title="Dish" dataIndex="dish.name" />
          <Column title="Price" dataIndex="dish.price" />
          <Column title="Amount" dataIndex="amount" />
          <Column title="Price of amount" dataIndex="totalDishPrice" />
          <Column
            title="Action"
            key="action"
            render={item => (
              <span>
                <Button
                  type="primary"
                  shape="circle"
                  icon="plus"
                  size="large"
                  onClick={() => props.increase(item.dish.id)}
                />
                <Divider type="vertical" />
                <Button
                  type="primary"
                  shape="circle"
                  icon="minus"
                  size="large"
                  onClick={() => props.decrease(item.dish.id)}
                />
                <Divider type="vertical" />
                <Button
                  type="danger"
                  shape="circle"
                  size="large"
                  onClick={() => props.removeAll(item.dish.id)}
                >
                  <Icon type="rest" theme="filled" />
                </Button>
              </span>
            )}
          />
        </Table>
      </Col>
    </Row>
  )
}

const mapStateToProps = state => {
  return {
    order: selectOrderedDishes(state),
  }
}

const mapDispatchToProps = {
  increase: addToCart,
  decrease: removeFromCart,
  removeAll: removeAllDishesById,
  clearCart: clearCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
