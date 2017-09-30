import React, {Component, PropTypes} from 'react'

export default class LogoutDropdown extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  logout() {
    this.props.logout()
    this.context.router.replace('/')
  }

  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
        <a href="#"
          className="dropdown-toggle"
          data-toggle="dropdown"
          role="button">
            欢迎您，{this.props.userData.username}
            <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li onClick={() => this.logout()}>
              <a href="#">注销登录</a>
            </li>
          </ul>
        </li>
      </ul>
    )
  }
}
