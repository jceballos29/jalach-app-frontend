import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import "../css/InitialSetup.css"
import Categories from './InitialSetup/Categories'
import OperationHours from './InitialSetup/OperationHours'
import Roles from './InitialSetup/Roles'

function InitialSetup() {

    const history = useHistory();

    const [categories, setCategories] = useState(0);
    const [roles, setRoles] = useState(0)
    const [hourly, setHourly] = useState(false)

    const handleAmountCategories = (amount) => {
        setCategories(amount);
    }

    const handleAmountRoles = (amount) => {
        setRoles(amount)
    }

    const handleHourly = (data) => {
        setHourly(data)
    }

    return (
        <div className="InitialSetup">
            <div className="setupContainer">
                <div className="Introduction">
                    <h1>¡Bienvenido Administrador!</h1>
                    <p>Soy Jalach, y desde hoy seré tu asistente.</p>
                    <p>Estaré ayudándote para que puedas hacer la correcta genstión a tu negocio.</p>
                    <p>Necesitamos algunos datos adicionales para comenzar.</p>
                </div>
                <OperationHours hourly={handleHourly}/>
                <Roles roleAmount={handleAmountRoles} />
                <Categories  categoriesAmount={handleAmountCategories}/>
                <div className="setupButtons">
                    <button onClick={() => {
                        //TODO: Realizar validación de campos
                        // if(categories > 0 && roles > 0 && hourly){
                             history.push('/company')
                        // }
                        //TODO: Generar anuncio de elementos vacíos
                    }}>
                        Comenzar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InitialSetup
