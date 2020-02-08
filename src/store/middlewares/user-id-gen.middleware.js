import uuid from 'uuid/v4'
import {selectUsers} from '../selectors'

export const userIdGen = store => next => action => {
  if (!action.addReview) {
    next(action)
  }
  const user = Object.values(selectUsers(store.getState())).find(
    user => user.name === action.payload.name
  )

  action.payload.userId = user ? user.id : uuid()

  next(action)
}
