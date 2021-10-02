import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import RoleTag from './RoleTag';

function Roles({roleAmount}) {

    const [roles, setRoles] = useState([])

    const addRole = (role) => {
        let rolesList = roles
        rolesList.push(role)
        setRoles(rolesList)
    }

    const deleteRole = (id) => {
        //TODO: Crear la función para eliminar elementos
        console.log(roles[id]);
    }

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        addRole(data);
        roleAmount(roles.length);
        reset();
    }
    
    const rolesColors = ["#F48FB1","#9575CD","#64B5F6","#4DB6AC","#AED581","#FFD54F","#FF8A65","#A1887F"];
    const rolesColorsList = rolesColors.map(i => (
        <option key={i} value={i} style={{backgroundColor: `${i}`}}>
            {i}
        </option>
    ));
    const rolesList  = roles.map((element, index) => (<RoleTag key={element.roleName} name={element.roleName} color={element.roleColor} id={index} deleteRole={deleteRole}/>))
    
    return (
        <div className="Roles">
            <div className="rolesContent">
                <h2>Roles</h2>
                <p>Esto nos ayudará a identificar a tus empleados y sus funciones.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Nombre" {...register("roleName", {required: true})} />
                    <select {...register("roleColor", { required: true })}>
                        {rolesColorsList}
                    </select>
                    <input type="text" placeholder="Pago por Hora" {...register("roleHourly", {required: true})} />

                    <input type="submit" value="Agregar"/>
                </form>
                <div className="rolesContainer">
                    {rolesList}
                </div>
            </div>
        </div>
    )
}

export default Roles
