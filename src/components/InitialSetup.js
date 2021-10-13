import React from 'react'
import { useHistory } from 'react-router-dom'
import "../css/InitialSetup.css"
import Categories from './InitialSetup/Categories'
import OperationHours from './InitialSetup/OperationHours'
import Roles from './InitialSetup/Roles'
import {  useDispatch, useSelector } from 'react-redux';
import { notFirstTime } from '../actions/auth.action'
function InitialSetup() {

    const history = useHistory();
    const dispatch = useDispatch();
    const { company } = useSelector((state) => state.auth);
    const { roles } = useSelector((state) => state.roles);
    const { categories } = useSelector((state) => state.categories);

    const disabled = company.opening_time && company.closing_time ? true : false;
    return (
        <div className="InitialSetup">
            <div className="setupContainer">
                <div className="Introduction">
                    <h1>¡Bienvenido Administrador!</h1>
                    <p>Soy Jalach, y desde hoy seré tu asistente.</p>
                    <p>Estaré ayudándote para que puedas hacer la correcta genstión a tu negocio.</p>
                    <p>Necesitamos algunos datos adicionales para comenzar.</p>
                </div>
                <OperationHours disable={disabled}/>
                <Roles rut={company.rut}/>
                <Categories rut={company.rut}/>
                <div className="setupButtons">
                    <button onClick={() => {
                            const checkHourly = company.opening_time !== null && company.closing_time !== null;
                            const checkRoles = roles.length>0;
                            const checkCategories = categories.length>0;
                            if(checkHourly && checkRoles && checkCategories){
                                dispatch(notFirstTime(company.rut))
                            }
                            history.push('/company')
                    }}>
                        Comenzar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InitialSetup
