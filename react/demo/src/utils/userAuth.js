import store, {history} from 'STORE'

export default function userAuth(nextState, replace, next) {
  let {userData} = store.getState()
  if (userData) return next()
  
  alert('请先登录再访问')
  history.goBack()
}
