import React from 'react'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Test from './Test'

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path='/Gallery' component={Test}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
