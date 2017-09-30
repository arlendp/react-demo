import React from 'react'
import NavBar from 'COMPONENT/Navbar/'

let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  DevTools = require('COMPONENT/DevTools').default
}

const App = ({ children, location }) => (
  <div>
    <NavBar location={location} />
    <div className="container">
      {children}
    </div>
    {DevTools && <DevTools/>}
  </div>
)

export default App
