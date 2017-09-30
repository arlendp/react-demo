import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import OptBtnGroup from 'COMPONENT/Msg/OptBtnGroup'
import dateTimeFormatter from 'UTIL/dateTimeFormatter'
import msgService from 'SERVICE/msgService'

export default class MagDetail extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context)
    this.state = {msg: {}}
  }

  componentWillMount() {
    // 这里params指的是随router传入的参数
    let {msg: {msgs}, params: {msgId}} = this.props
    let msg = msgs.filter(({id}) => id === msgId)[0]
    msg ? this.setState({msg}) : this.fetchMsgFromAPI(msgId)
  }

  fetchMsgFromAPI(msgId) {
    msgService.fetch({msgId}).then(msg => {
      if (!msg) return this.context.router.replace('/msg')
      this.setState({msg})
    })
  }

  render() {
    let {userData, delMsg} = this.props
    let msg = this.state.msg
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          标题：
          <strong>{msg.title}</strong>
          <span className="badge pull-right">
            {dateTimeFormatter(msg.time)}
          </span>
          <br/>
          发布者：
          <Link to= {`/msg?author=${msg.author}`}>
            <i>{msg.author}</i>
          </Link>
          <OptBtnGroup
            msgId={msg.id}
            isAuthor={userData && userData.username === msg.author}
            delMsg={delMsg}
            parentName="MsgDetail"
          >
            <button
              className="btn btn-primary btn-xs"
              onClick={() => this.context.router.goBack()}>
              返回
            </button>
          </OptBtnGroup>
        </div>
        <div className="panel-body">
          {msg.content}
        </div>
      </div>
    )
  }
}
