import React from 'react'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Deals from './pages/Deals'
import Signup from './pages/auth/Signup'
import Signin from './pages/auth/Signin'


const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/deals" component={Deals}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/signin" component={Signin}/>
                    
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
