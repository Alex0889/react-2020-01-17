import React, {Component} from 'react'
import {Button} from 'antd'
import {connect} from 'react-redux'
import {decrement, increment} from '../../store/action-creators'

class Counter extends Component {
  render() {
    return (
      <div>
        <span style={{padding: '16px'}}>{this.props.count}</span>
        <Button.Group>
          <Button onClick={this.props.decrement} type="primary" icon="minus" />
          <Button onClick={this.props.increment} type="primary" icon="plus" />
        </Button.Group>
      </div>
    )
  }
}

export default connect(state => ({count: state.count}), {increment, decrement})(
  Counter
)
