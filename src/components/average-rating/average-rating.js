import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {useSelector} from 'react-redux'
import {selectAverageRating} from '../../store/selectors/index'

function AverageRating({reviews}) {
  const selectAverageRatingMemo = useCallback(
    state => selectAverageRating(state, {ids: reviews}),
    [reviews]
  )
  const averageRating = useSelector(selectAverageRatingMemo)

  return (
    <div>
      <Rate value={averageRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default AverageRating
