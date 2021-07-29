import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {MainPage, StatsPage} from './components'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/stats' component={StatsPage} />
      </Switch>
    )
  }
}

export default Routes
