import React from 'react'
import {Link} from 'react-router'

/*
 * 可以写成类的形式
 * 也可以简写成函数形式
 */

export default function Welcome() {
  return (
    <div className="jumbotron">
      <h1>欢迎使用</h1>
      <h1>React Demo</h1>
      <p>
        <Link to="/msg" className="btn btn-success btn-lg">前往留言板 &gt;</Link>&nbsp;
        <Link to="/todo" className="btn btn-success btn-lg">前往待办事项 &gt;</Link>
      </p>
    </div>
  )
}
