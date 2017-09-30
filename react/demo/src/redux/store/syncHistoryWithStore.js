// 同步history配置
import { useRouterHistory } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'

const browserHistory = useRouterHistory(createHashHistory)({
  basename: '',
  queryKey: false
})

// 生成redux的middleware
export const historyMiddleware = routerMiddleware(browserHistory)

// 增强history
export default function(store) {
  return syncHistoryWithStore(
    browserHistory,
    store,
    {
      selectLocationState: (state) => state.router // 与reducer中routerReducer对应的key保持一致 redux/reducers/index.js
    }
  )
}
