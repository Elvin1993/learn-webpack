import React from 'react'
import {Router, Route, Link, IndexRoute, Redirect, hashHistory, browserHistory} from 'react-router'

// import {createHashHistory} from 'history'
// const history = createHashHistory({queryKey: true})
const history = hashHistory
// const history = browserHistory

import  * as Home  from './Home'

const AppRouter = (
  <Router history={history}>
    <Route path="/" component={Home}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)
export default AppRouter

