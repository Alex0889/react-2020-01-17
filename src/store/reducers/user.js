import {normalizedUsers} from '../../fixtures'

const initialState = normalizedUsers.reduce((users, user) => {
  return {
    ...users,
    [user.id]: user,
  }
}, {})

export const userReducer = (userState = initialState, action) => {
  if (action.type === 'ADD_REVIEW') {
    const {name, userId} = action.payload
    if (!userState[userId]) {
      userState = {
        ...userState,
        [userId]: {
          id: userId,
          name,
        },
      }
    }
  }

  return userState
}
