import React, {Component} from 'react'
import handleChange from 'MIXIN/handleChange'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {username: ''}
    this.handleChange = handleChange.bind(this)
  }

  handleSubmit() {
    let username = this.state.username
    if (!username) return alert('用户名不能为空')
    this.props.login({username})
  }

  render() {
    return (
      <form
        className="navbar-form navbar-right"
        onSubmit={
          (e) => {
            e.preventDefault()
            this.handleSubmit()
          }
        }>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="请输入您的用户名"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-success">登录</button>
      </form>
    )
  }
}
