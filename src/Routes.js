import React from 'react'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Deals from './pages/Deals'
import Signup from './pages/auth/Signup'
import Signin from './pages/auth/Signin'
import Customer from './pages/Customer'
import Sell from './pages/Sell'


const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/deals" component={Deals}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/customer" component={Customer}/>
                    <Route exact path="/sell" component={Sell}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
