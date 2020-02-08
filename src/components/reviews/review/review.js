import React, {useCallback} from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import {useSelector} from 'react-redux'
import {selectReview, selectUser} from '../../../store/selectors'

const Review = props => {
  const selectReviewMemo = useCallback(state => selectReview(state, props), [
    props,
  ])
  const review = useSelector(selectReviewMemo)

  const selectUserMemo = useCallback(
    state => selectUser(state, {id: review.userId}),
    [review.userId]
  )
  const user = useSelector(selectUserMemo)

  return (
    <Card className={styles.review}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title
            data-automation-id="REVIEW_USER"
            className={styles.name}
            level={4}
          >
            {user.name}
          </Typography.Title>
          <Typography.Text
            data-automation-id="REVIEW_TEXT"
            className={styles.comment}
          >
            {review.text}
          </Typography.Text>
        </Col>
        <Col xs={8} md={6} align="right" className={styles.rateColumn}>
          <Rate disabled value={review.rating} />
        </Col>
      </Row>
    </Card>
  )
}

export default Review
