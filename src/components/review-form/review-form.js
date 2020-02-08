import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import {connect} from 'react-redux'
import cx from 'classnames'

import styles from './review-form.module.css'
import {addReview} from '../../store/action-creators'

const ReviewForm = ({id, addReview}) => {
  const [name, setName] = useState(null)
  const [text, setText] = useState(null)
  const [rating, setRating] = useState(0)
  const review = {id, name, text, rating}

  const resetForm = () => {
    setName(null)
    setText(null)
    setRating(0)
  }

  const handleSubmit = event => {
    event.preventDefault()
    event.persist()
    addReview(review)
    resetForm()
  }

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Your name"
              className={cx(styles.inputName)}
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
            />
            <Input.TextArea
              rows={3}
              size="large"
              value={text}
              onChange={e => {
                setText(e.target.value)
              }}
            />
            <div>
              Rating:{' '}
              <Rate
                value={rating}
                onChange={value => {
                  setRating(+value)
                }}
              />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              PUBLISH REVIEW
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

const mapDispatchToProps = {
  addReview,
}

export default connect(null, mapDispatchToProps)(ReviewForm)
