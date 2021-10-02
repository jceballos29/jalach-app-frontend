import React, { useState } from 'react'
// import '../../css/Admin/Payroll.css'
import AddEmployee from './Payroll/AddEmployee'
import Employee from './Payroll/Employee'

const employee = {
    firstname: "Juan",
    lastname: "Ceballos",
    username: "jceballos",
    role: "Cajero",
    email: "juanceballos@mail.com",
    phone: "3146910642",
    weeklyHours: 48
}

function Payroll() {

    const [showAddEmployee, setShowAddEmployee] = useState(false)
    const handleShow = (data) => {
        setShowAddEmployee(data)
    }

    return (
        <div className="Payroll">
            <div className="payrollContainer">
                <div className="employees">
                    <h2 className="employeesTableTitle">Empleados</h2>
                    <div className="employeesTable">
                        <div className="employeesHeader">
                            <span>Nombre</span>
                            <span>Apellido</span>
                            <span>Usuario</span>
                            <span>Rol</span>
                            <span>Correo</span>
                            <span>Teléfono</span>
                            <span>Horas</span>
                            <span>Acciones</span>
                        </div>
                        <div className="employeesContent">
                            <Employee employee={employee}/>
                        </div>
                    </div>
                </div>
                <div className="payrollActions">
                    <button onClick={() => {
                        setShowAddEmployee(true)
                    }}>Agreagar Empleado</button>
                </div>
            </div>
        <AddEmployee showAddEmployee={showAddEmployee} handleShow={handleShow}/>
        </div>
    )
}

export default Payroll
