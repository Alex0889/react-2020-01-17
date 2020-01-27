import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dish from './dish'
import {restaurants} from '../../fixtures'

const dishMock = restaurants[0].menu[0]

Enzyme.configure({adapter: new Adapter()})

describe('Dish', function() {
  it('should increase cart amount when click on plus button', function() {
    const wrapper = mount(<Dish dish={dishMock} />)

    wrapper
      .find('button[data-automation-id="INCREASE"]')
      .simulate('click')
      .simulate('click')
      .simulate('click')
      .simulate('click')

    expect(wrapper.find('[data-automation-id="AMOUNT"]').text()).toBe('4')
  })

  it('should be zero when click on minus button if amount 0', function() {
    const wrapper = mount(<Dish dish={dishMock} />)

    wrapper.find('button[data-automation-id="DECREASE"]').simulate('click')

    expect(wrapper.find('[data-automation-id="AMOUNT"]').text()).toBe('0')
  })

  it('should decrease when click on minus button', function() {
    const wrapper = mount(<Dish dish={dishMock} />)

    wrapper
      .find('button[data-automation-id="INCREASE"]')
      .simulate('click')
      .simulate('click')
      .simulate('click')

    wrapper.find('button[data-automation-id="DECREASE"]').simulate('click')

    expect(wrapper.find('[data-automation-id="AMOUNT"]').text()).toBe('2')
  })
})
