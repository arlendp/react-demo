import React, {Component} from 'react'
import {Link} from 'react-router'
import Pagination from './Pagination'
import NoticeBar from './NoticeBar'
import DisplayControl from './DisplayControl'
import OptBtnGroup from 'COMPONENT/Msg/OptBtnGroup'
import dateTimeFormatter from 'UTIL/dateTimeFormatter'
export default class MsgList extends Component {
  componentWillMount() {
    console.log(this.props)
    let {author} = this.props.location.query
    this.props.specifyAuthor(author)
    this.updateMsgList()
  }
  // 这里防止无限循环 因此要进行条件判断
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      return this.props.specifyAuthor(nextProps.location.query.author)
    }

    const nextDisplayControl = nextProps.msg.displayControl
    if (
      JSON.stringify(nextDisplayControl) === JSON.stringify(this.props.msg.displayControl)
    ) return
    this.updateMsgList(nextDisplayControl)
  }

  updateMsgList(displayControl = this.props.msg.displayControl) {
    let {pageIdx, quantity, authorSpecified: author} = displayControl
    this.props.fetchMsg({pageIdx, quantity, author})
  }

  render() {
    let {msg: {msgs, displayControl}, userData, delMsg, goPrevPage, goNextPage, changeQuantity, resetDisplayControl} = this.props

    return (
      <div>
        <Pagination
          msgsLen={msgs.length}
          {...displayControl}
          goPrevPage={goPrevPage}
          goNextPage={goNextPage}
        />
        {!msgs.length && <NoticeBar/>}
        <DisplayControl 
        msgsLen={msgs.length}
        {...displayControl}
        changeQuantity={changeQuantity}
        resetDisplayControl={resetDisplayControl}
        />
        <ul className="list-group">
          {msgs.map(msg => (
            <li 
              className="list-group-item clearfix"
              key={msg.id}>
            <div>
              <Link to={`/msg/detail/${msg.id}`}>
                <b>{msg.title}</b>
              </Link>
              <span className="badge"
                style={{float: 'right'}}
              >
                {dateTimeFormatter(msg.time, 3)}
              </span>
            </div>
            <div>
              <p style={{float: 'left'}}>
                <span className="text-muted">by&nbsp;</span>
                <Link to={`/msg?author=${msg.author}`}>
                  <i>{msg.author}</i>
                </Link>
              </p>
              <OptBtnGroup
                style={{float: 'right'}}
                msgId={msg.id}
                isAuthor={userData && userData.username === msg.author}
                delMsg={delMsg}
              >
                <Link
                  className="btn btn-info"
                  to={`/msg/detail/${msg.id}`}
                >查看详情</Link>
              </OptBtnGroup>
              </div>
            </li>
          ))}
        </ul>
        </div>
      )
  }
}
