const enhancers = []
if (__DEV__) {
  // Redux DevTools
  if (!__COMPONENT_DEVTOOLS__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  } else {
    const DevTools = require('COMPONENT/DevTools').default
    enhancers.push(DevTools.instrument())
  }
}

export default enhancers
