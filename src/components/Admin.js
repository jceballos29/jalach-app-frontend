import React, { useEffect, useState } from 'react'
import { Switch, Route, NavLink, Redirect, useRouteMatch } from 'react-router-dom'
import '../css/Admin.css'
import Dashboard from './Admin/Dashboard';
import Inventory from './Admin/Inventory';
import Payroll from './Admin/Payroll';
import Sales from './Admin/Sales';
import { MdDashboard, MdAssignment, MdStoreMallDirectory, MdGroupWork } from 'react-icons/md'

import { useDispatch, useSelector } from 'react-redux';
import { logoutCompany } from '../actions/auth.action'

import {getRoles, logoutRoles} from '../actions/role.actions'
import { getCategories, logoutCategories } from '../actions/category.actions';



const date = new Date();

function Admin() {

    const dispatch = useDispatch();
    const { company } = useSelector((state) => state.auth);

    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            });
        }, 1000);
        return () => clearInterval(timer)
    }, []);

    useEffect(() => {
        dispatch(getRoles(company.rut))
        dispatch(getCategories(company.rut))
    }, [company, dispatch])

    const {path, url} = useRouteMatch();

    if(company.first_time) {
        return <Redirect to="/start-setup"/>
    }
    
    return (
        <div className="Admin">
            <div className="AdminNavBar">
                <ul>
                    <li>
                        <NavLink to={`${url}/dashboard`} className="NavBarItem" activeClassName="selected">
                            <div className="Icon">
                                <MdDashboard size="25px"/> 
                            </div>
                            <span className="Name">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${url}/inventory`} className="NavBarItem" activeClassName="selected">
                            <div className="Icon">
                                <MdAssignment size="25px"/>
                            </div>
                            <span  className="Name">Inventario</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${url}/payroll`} className="NavBarItem" activeClassName="selected">
                            <div className="Icon">
                                <MdGroupWork size="25px"/>
                            </div>
                            <span  className="Name">Nómina</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${url}/sales`} className="NavBarItem" activeClassName="selected">
                            <div className="Icon">
                                <MdStoreMallDirectory size="25px"/>
                            </div>
                            <span  className="Name">Ventas</span>
                        </NavLink>
                    </li>
                    
                </ul>
                <button onClick={() => {
                    dispatch(logoutCompany());
                    dispatch(logoutRoles());
                    dispatch(logoutCategories());
                    window.location.reload();
                }}>Log Out</button>
            </div>
            <div className="AdminContent">
            <Switch>
                    <Route path={`${path}/payroll`}>
                        <Payroll />
                    </Route>
                    <Route path={`${path}/sales`}>
                        <Sales />
                    </Route>
                    <Route path={`${path}/inventory`}>
                        <Inventory />
                    </Route>
                    <Route path={`${path}/dashboard`}>
                        <Dashboard dateTime={dateTime}/>
                    </Route>
                    <Route path={path}>
                        <Redirect to={`${path}/dashboard`}/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Admin
