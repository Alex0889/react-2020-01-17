import uuid from 'uuid/v4'
export const reviewIdGen = store => next => action => {
  if (!action.addReview) {
    next(action)
  }
  action.payload.reviewId = uuid()
  next(action)
}
