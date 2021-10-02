import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Admin from '../components/Admin'
import InitialSetup from '../components/InitialSetup'
import Login from '../components/Login'
import Register from '../components/Register'

function Routes() {
    return (
        <Switch>
            <Route path="/company">
                <Admin />                
            </Route>
            <Route path="/start-setup">
                <InitialSetup />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
                <Login />
            </Route>
        </Switch>
    )
}

export default Routes
