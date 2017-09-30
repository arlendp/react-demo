import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import store from 'STORE'
import userReducer from 'REDUCER/user'

// 同步的Reducers

const syncReducers = {
  // 增加reducer
  router: routerReducer,
  userData: userReducer
}

// 异步的Reducers
const asyncReducers = {}

export function createRootReducer() {
  return combineReducers({
    ...syncReducers,
    ...asyncReducers
  })
}

export function injectReducer(key, reducer) {
  asyncReducers[key] = reducer
  store.replaceReducer(createRootReducer())
}
