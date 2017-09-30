import {
  injectReducer
} from 'REDUCER'
import userAuth from 'UTIL/userAuth'
import createContainer from 'UTIL/createContainer'

const connectComponent = createContainer(({
  userData,
  msg
}) => ({
  userData,
  msg
}), require('ACTION/msg').default)

export default {
  path: 'msg',

  // 基页
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      // 注入Reducer
      injectReducer('msg', require('REDUCER/msg/').default)
      cb(null, require('VIEW/msg').default)
    }, 'msgView')
  },

  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        // 在这里进行connect
        cb(null, connectComponent(require('COMPONENT/Msg/MsgList/').default))
      }, 'msgList')
    }
  },

  childRoutes: [{
      path: 'detail/:msgId',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, connectComponent(require('COMPONENT/Msg/MsgDetail').default))
        }, 'msgDetail')
      }
    }, {
      path: 'add',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, connectComponent(require('COMPONENT/Msg/MsgForm').default))
        }, 'msgForm')
      },
      onEnter: userAuth
    }
    // , {
    //   path: 'modify/:msgId',
    //   getComponent(nextState, cb) {
    //     require.ensure([], (require) => {
    //       cb(null, connectComponent(require('COMPONENT/Msg/MsgForm').default))
    //     }, 'msgForm')
    //   },
    //   onEnter: userAuth
    // }
  ]
}