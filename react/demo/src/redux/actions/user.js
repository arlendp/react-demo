import userService from 'SERVICE/userService'

const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

const loginDone = (userData) => ({type: LOG_IN, payload: userData})

const login = (formData) => {
  return (dispatch) => {
    userService.login(formData).then((res) => dispatch(loginDone(res)))
  }
}

const checkLogin = () => {
  return (dispatch) => {
    userService.checkLogin().then((res) => {
      if (!res)
        return
      dispatch(loginDone(res))
    })
  }
}

const logout = () => {
  return (dispatch) => {
    userService.checkLogin().then((res) => {
      dispatch({type: LOG_OUT})
    })
  }
}

export default {
  login,
  checkLogin,
  logout
}

export const ACTION_HANDLERS = {
  [LOG_IN]: (userData, {payload}) => payload,
  [LOG_OUT]: () => null
}
