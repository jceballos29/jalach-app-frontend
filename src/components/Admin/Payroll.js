import React, { useState, useEffect } from 'react'
import '../../css/Admin/Payroll.css'
import AddEmployee from './Payroll/AddEmployee'
import Employee from './Payroll/Employee'

import { useSelector } from 'react-redux';



function Payroll() {

    const { employees } = useSelector((state) => state.employees);
    const { company } = useSelector((state) => state.auth);
    const [employeesList, setEmployeesList] = useState()
    const [showAddEmployee, setShowAddEmployee] = useState(false)
    const handleShow = (data) => {
        setShowAddEmployee(data)
    }

    useEffect(() => {
        if(employees && company){
            setEmployeesList(
                employees.map(employee => <Employee key={employee.id} employee={employee} rut={company.rut}/>)
            );
        }
    }, [employees, company])

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
                            {employeesList}
                        </div>
                    </div>
                </div>
                <div className="payrollActions">
                    <button onClick={() => {
                        setShowAddEmployee(true)
                    }}>Agreagar Empleado</button>
                    {/* <button onClick={() => {
                        console.log('Role');
                    }}>Agregar Rol</button> */}
                </div>
            </div>
        <AddEmployee showAddEmployee={showAddEmployee} handleShow={handleShow} rut={company.rut}/>
        </div>
    )
}

export default Payroll
