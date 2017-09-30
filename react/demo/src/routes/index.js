export default {
  path: '/',
  component: require('COMPONENT/App').default,
  indexRoute: {
    component: require('COMPONENT/Welcome').default
  },

  childRoutes: [
    require('./msg').default
    // require('./todo').default,
    //
    // {path: 'redirect', component: require('COMPONENT/Redirect').default},
    //
    // // 无法匹配的路由
    // {path: '*', component: require('COMPONENT/404').default}
  ]
}
