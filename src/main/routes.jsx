import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Auth from '../auth/auth'
import Prices from '../prices/prices'
import About from '../about/about';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/login' component={Auth} />
        <Route path='/prices' component={Prices} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/' />
    </Router>
)