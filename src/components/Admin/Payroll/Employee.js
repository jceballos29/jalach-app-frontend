import React, { useEffect, useState } from 'react'
import '../../../css/Admin/Payroll/Employee.css'
import { FaUserEdit, FaUserMinus, FaUserCheck } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee, dismissEmployee } from '../../../actions/employee.action';



function Employee({employee, rut}) {
    
    const dispatch = useDispatch();
    const { roles } = useSelector((state) => state.roles);
    const [role, setRole] = useState()
    const [rolesList, setRolesList] = useState()
    const [update, setUpdate] = useState(false)
    const [display, setDisplay] = useState({
        edit: "block",
        save: "none"
    })

    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        if(data.role_id === '') data.role_id = employee.role_id
        data.id = employee.id;
        data.firstname=employee.firstname;
        data.lastname = employee.lastname
        data.business_rut = rut
        data.username = employee.username;
        dispatch(updateEmployee(rut, employee.id, data))
        reset();
    }

    useEffect(() => {
        if(roles && employee){
            const result = roles.find(role => role.id === employee.role_id);
            setRole(result.role);
            setRolesList(
                roles.map(role => (<option key={role.id} value={role.id}>{role.role}</option>))
            );
        }
    }, [roles, employee])

    useEffect(() => {
        setUpdate(false)
    }, [])

    useEffect(() => {
        if(update){
            setDisplay({
                edit: "none",
                save: "block"
            })
        } else {
            setDisplay({
                edit: "block",
                save: "none"
            })
        }
    },[update])

    return (
        <form className="Employee" onSubmit={handleSubmit(onSubmit)}>

            <span style={{display:`block`}}>{employee.firstname}</span>

            <span style={{display:`block`}} >{employee.lastname}</span>

            <span style={{display:"block"}}>{employee.username}</span>
            <div className="employeeItem">
                <span style={{display:`${display.edit}`}} >{role}</span>
                    <select style={{display:`${display.save}`}} {...register("role_id")} defaultValue={employee.role_id}>
                        {rolesList}
                    </select>
            </div>
            <div className="employeeItem">
                <span style={{display:`${display.edit}`}}>{employee.email}</span>
                <input style={{display:`${display.save}`}} type="email" placeholder={employee.email} defaultValue={employee.email} {...register("email")} />

            </div>
            <div className="employeeItem">
                <span style={{display:`${display.edit}`}}>{employee.phone}</span>
                <input style={{display:`${display.save}`}} type="tel" placeholder={employee.phone} defaultValue={employee.phone} {...register("phone")} />
            </div>
            <div className="employeeItem">
                <span style={{display:`${display.edit}`}}>{employee.weekly_hours}</span>
                <input style={{display:`${display.save}`}} type="number" placeholder={employee.weekly_hours} defaultValue={employee.weekly_hours} {...register("weekly_hours")} />
            </div>
            <div className="employeeOptions">
                    <div className="updateEmployee">
                        <FaUserEdit  style={{color:"#1565C0", display:`${display.edit}`}} size="20px"  className="option"  onClick={
                            () => {
                                setUpdate(true)
                                
                        }}/>
                        <button type="submit">
                            <FaUserCheck style={{color:"#00695C", display:`${display.save}`}} size="20px" className="option"  onClick={
                                () => {
                                    setUpdate(false)
                            }}/>
                        </button>
                    </div>
                    <FaUserMinus style={{color:"#C62828"}} size="20px" className="option"  onClick={() =>{
                        dispatch(dismissEmployee(rut, employee.id))
                    }}/>
            </div>
        </form>
    )
}

export default Employee
