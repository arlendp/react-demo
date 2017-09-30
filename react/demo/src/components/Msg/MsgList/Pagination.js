import React from 'react'
import ExampleHoC from 'HOC/ExampleHoC'

const Pagination = ({msgsLen, pageIdx, quantity, goPrevPage, goNextPage}) => (
  <nav>
    <ul className="pager">
    {
      pageIdx > 1 &&
      <li
        className="previous"
        onClick={() => goPrevPage()}>
        <a href="javascript:void(0);">
          <span aria-hidden="true">&larr;</span>
          上一页
        </a>
      </li>
    }
    {
      msgsLen == quantity &&
      <li
        className="next"
        onClick={() => goNextPage()}>
          <a href="javascript:void(0);">
            下一页
            <span aria-hidden="true">&rarr;</span>
          </a>
        </li>
    }
  </ul>
  </nav>
)

export default ExampleHoC(Pagination)
