import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "../components/Admin";
import InitialSetup from "../components/InitialSetup";
import Login from "../components/Login";
import Register from "../components/Register";
import { ProtectedRoute } from "./ProtectedRoute";

function Routes() {
    return (
        <Switch>
            <ProtectedRoute path="/company">
                <Admin />
            </ProtectedRoute>
            <ProtectedRoute path="/start-setup">
                <InitialSetup />
            </ProtectedRoute>
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
    );
}

export default Routes;
