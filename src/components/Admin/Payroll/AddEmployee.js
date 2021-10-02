import React, { useEffect, useState } from 'react'
import '../../../css/Admin/Payroll/AddEmployee.css'
import { useForm } from 'react-hook-form';

function AddEmployee({showAddEmployee, handleShow}) {

    const [show, setShow] = useState(false)
    const [display, setDisplay] = useState("none")

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    }

    useEffect(() => {
        if(showAddEmployee){
            setShow(true)
        }
    }, [showAddEmployee])

    useEffect(() => {
        if(show){
            setDisplay("flex");
        }  else {
            setDisplay("none")
        }
    }, [show])

    const style = {display: `${display}`}
    return (
        <div className="AddEmployee" style={style} >
            <form className="addForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="addFormContainer">
                    <h2>Agregar Empleado</h2>
                    <div className="addFormContent">
                        <div className="FormGruop">
                            <h3>Información Personal</h3>
                            <input type="text" placeholder="Nombre" {...register("firstname", {required: true})} />
                            <input type="text" placeholder="Apellido" {...register("lastname", {required: true})} />
                        </div>
                        <div className="FormGruop">
                            <h3>Cargo a Desempeñar</h3>
                            <select {...register("role", { required: true })}>
                                <option value="Mesero">Mesero</option>
                                <option value="Cajero">Cajero</option>
                            </select>
                            <input type="number" placeholder="Horas Semanales" {...register("weekly_hours", {required: true})} />
                        </div>
                        <div className="FormGruop">
                            <h3>Información de Contácto</h3>
                            <input type="email" placeholder="Correo Electrónico" {...register("email", {required: true})} />
                            <input type="tel" placeholder="Telefóno" {...register("phone", {required: true})} />
                        </div>
                    </div>
                    <div className="addEmployeeButtons">
                        <button type="submit">Guardar</button>
                        <button onClick={() => {
                            setShow(false);
                            handleShow(false);
                            }}>Cerrar</button>
                    </div>
                </div>                
            </form>
        </div>
    )
}

export default AddEmployee
