import React, {Component} from 'react'

const ExampleHoC = WrappedComponent => class extends Component {
  componentWillMount() {
    console.log('[HoC] componentWillMount')
  }

  componentDidMount() {
    console.log('[HoC] componentDidMount')
  }

  render() {
    return <WrappedComponent {...this.props} />
  }
}

export default ExampleHoC
