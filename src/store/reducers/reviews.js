import {normalizedReviews} from '../../fixtures'

const initialState = normalizedReviews.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialState, action) => {
  if (action.type === 'ADD_REVIEW') {
    const {text, rating, userId, reviewId} = action.payload

    reviewsState = {
      ...reviewsState,
      [reviewId]: {
        id: reviewId,
        userId,
        text,
        rating,
      },
    }
  }
  return reviewsState
}
