import {normalizedRestaurants} from '../../fixtures'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  if (action.type === 'ADD_REVIEW') {
    const restaurant = restaurantsState.find(
      restaurant => restaurant.id === action.payload.id
    )
    const addedReviewToRestaurant = {
      ...restaurant,
      reviews: [...restaurant.reviews, action.payload.reviewId],
    }

    return restaurantsState.map(restaurantFromState =>
      restaurantFromState === restaurant
        ? addedReviewToRestaurant
        : restaurantFromState
    )
  }
  return restaurantsState
}
