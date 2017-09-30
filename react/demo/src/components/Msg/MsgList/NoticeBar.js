import React from 'react'
const NoticeBar = () => (
  <div className="alert alert-warning alert-dismissible">
    <button
      type="button"
      className="close"
      data-dismiss="alert"
      aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>暂无更多信息</strong>
  </div>
)

export default NoticeBar
