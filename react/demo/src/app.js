import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import store, { history } from 'STORE'
import routes from 'ROUTE'

if (__DEV__) {
  console.log('[当前环境] 开发环境')
}

if (__PROD__) {
  console.log('[当前环境] 生产环境')
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} children={routes} />
  </Provider>,
  document.getElementById('app')
)
