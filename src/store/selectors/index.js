import {createSelector} from 'reselect'

export const selectId = (state, ownProps) => ownProps.id

export const selectIds = (state, ownProps) => ownProps.ids

export const selectCart = state => state.cart

export const selectRestaurantList = state => state.restaurants

export const selectDishes = state => state.dishes

export const selectReviews = state => state.reviews

export const selectUsers = state => state.users

export const selectAverageRating = createSelector(
  selectReviews,
  selectIds,
  (reviews, ids) => {
    const rawRating =
      ids.reduce((acc, id) => acc + reviews[id].rating, 0) / ids.length
    return Math.floor(rawRating * 2) / 2
  }
)

export const selectUser = createSelector(selectUsers, selectId, (users, id) => {
  return users[id]
})

export const selectReview = createSelector(
  selectReviews,
  selectId,
  (reviews, id) => {
    return reviews[id]
  }
)

export const selectDish = createSelector(
  selectDishes,
  selectId,
  (dishes, id) => {
    return dishes[id]
  }
)

export const selectAmountFromCart = createSelector(
  selectCart,
  selectId,
  (cart, id) => {
    return cart[id] || 0
  }
)

export const selectCartInfo = createSelector(
  selectCart,
  selectRestaurantList,
  selectDishes,
  (cart, restaurants, dishes) => {
    const orderedDishes = restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dishId => {
          const amount = cart[dishId]
          if (amount) {
            const dish = dishes[dishId]
            const totalDishPrice = amount * dish.price
            result.totalPrice += totalDishPrice
            result.dishes.push({
              dish,
              amount,
              totalDishPrice,
            })
          }
        })
        return result
      },
      {
        dishes: [],
        totalPrice: 0,
      }
    )
    return {
      orderedDishes,
    }
  }
)
