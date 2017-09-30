import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

export default class OptBtnGroup extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  delMsg() {
    if (!confirm('确认删除？')) return
    
    let {msgId, delMsg, parentName} = this.props

    delMsg(msgId)

    if (parentName === 'msgDetail') {
      this.context.router.replace('/msg')
    }
  }

  render() {
    let {isAuthor, msgId, children} = this.props

    return (
      <div
        role="group"
        className="btn-group btn-group-xs pull-right"
      >
        {children}
        {isAuthor && 
          <Link
            to={`/msg/modify/${msgId}`}
            className="btn btn-warning"
            修改
          ></Link>
        }
        {isAuthor &&
          <a href="javascript:;"
            className="btn btn-danger"
            onClick={() => this.delMsg}>
            删除
          </a>
        }
      </div>
    )
  }
}
