import React, { useEffect, useState } from 'react'
// import '../../../css/Admin/Payroll/Employee.css'
import { FaUserEdit, FaUserMinus, FaUserCheck } from "react-icons/fa";
import { useForm } from 'react-hook-form';

function Employee({employee}) {
    
    const [update, setUpdate] = useState(false)
    const [display, setDisplay] = useState({
        edit: "block",
        save: "none"
    })

    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        
        reset();
    }


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
            <div className="employeeItem" >
                <span style={{display:`${display.edit}`}}>{employee.firstname}</span>
                <input style={{display:`${display.save}`}} type="text" placeholder={employee.firstname} defaultValue={employee.firstname} {...register("firstname")}/>
            </div>
            <div className="employeeItem">
                <span style={{display:`${display.edit}`}} >{employee.lastname}</span>
                <input style={{display:`${display.save}`}} type="text" placeholder={employee.lastname} defaultValue={employee.lastname} {...register("lastname")} />
            </div>
            <span style={{display:"block"}}>{employee.username}</span>
            <div className="employeeItem">
                <span style={{display:`${display.edit}`}} >{employee.role}</span>
                    <select style={{display:`${display.save}`}} {...register("role")} defaultValue={employee.role}>
                        <option value="Mesero">Mesero</option>
                        <option value="Cajero">Cajero</option>
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
                <span style={{display:`${display.edit}`}}>{employee.weeklyHours}</span>
                <input style={{display:`${display.save}`}} type="number" placeholder={employee.weeklyHours} defaultValue={employee.weeklyHours} {...register("weekly_hours")} />
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
                                    console.log('Guardar');
                                    
                            }}/>
                        </button>
                    </div>
                    <FaUserMinus style={{color:"#C62828"}} size="20px" className="option"  onClick={() =>{
                        //TODO: Crear la función eliminar empleado.
                        console.log('Eliminar');
                    }}/>
            </div>
        </form>
    )
}

export default Employee
