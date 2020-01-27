import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import {restaurants} from '../../fixtures'
import Review from './review'

const reviewsMock = restaurants[0].reviews
const reviewsLength = reviewsMock.length

const empty = []

Enzyme.configure({adapter: new Adapter()})

describe('Reviews', () => {
  it('should render amount of reviews', () => {
    const wrapper = mount(<Reviews reviews={reviewsMock} />)

    expect(wrapper.find(Review).getElements().length).toBe(reviewsLength)
  })

  it('should be 0 if props is empty', () => {
    const wrapper = mount(<Reviews reviews={empty} />)

    expect(wrapper.find(Review).getElements().length).toBe(0)
  })
})
