import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Restaurants from './restaurants'
import {restaurants} from '../../fixtures'

Enzyme.configure({adapter: new Adapter()})

describe('Restaurants', function() {
  it('should render navigation items', function() {
    const wrapper = mount(<Restaurants restaurants={restaurants} />)

    expect(
      wrapper.find('[data-automation-id="RESTAURANT_NAVIGATION"]').length
    ).toBe(restaurants.length)
  })
})
