import React from 'react'
import {Comment, Rate, Row, Col} from 'antd'

const Review = ({review}) => {
  return (
    <Row
      type="flex"
      justify="space-between"
      align="middle"
      style={{border: '1px solid rgb(236, 236, 236)', marginTop: '5px'}}
    >
      <Col span={18}>
        <Comment author={review.user} content={review.text} />
      </Col>
      <Col span={6}>
        <Rate value={review.rating} disabled />
      </Col>
    </Row>
  )
}

export default Review
