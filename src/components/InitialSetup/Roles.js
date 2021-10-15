import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import RoleTag from "./RoleTag";
import { useDispatch, useSelector } from "react-redux";
import { addRole } from "../../actions/role.actions";

function Roles({ rut }) {
    const dispatch = useDispatch();
    const { roles } = useSelector((state) => state.roles);
    const [rolesList, setRolesList] = useState();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        data = Object.assign({ business_rut: rut }, data);
        dispatch(addRole(rut, data));
        reset();
    };

    const rolesColors = [
        "#F48FB1",
        "#9575CD",
        "#64B5F6",
        "#4DB6AC",
        "#AED581",
        "#FFD54F",
        "#FF8A65",
        "#A1887F",
    ];
    const rolesColorsList = rolesColors.map((color, index) => (
        <option
            key={index}
            value={color}
            style={{ backgroundColor: `${color}` }}
        >
            {color}
        </option>
    ));

    useEffect(() => {
        if (roles) {
            setRolesList(
                roles.map((role) => (
                    <RoleTag
                        key={role.id}
                        name={role.role}
                        color={role.color}
                        id={role.id}
                        rut={rut}
                    />
                ))
            );
        }
    }, [roles, rut]);

    return (
        <div className="Roles">
            <div className="rolesContent">
                <h2>Roles</h2>
                <p>
                    Esto nos ayudará a identificar a tus empleados y sus
                    funciones.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Nombre"
                        {...register("role", { required: true })}
                    />
                    <select {...register("color", { required: true })}>
                        {rolesColorsList}
                    </select>
                    <input
                        type="text"
                        placeholder="Pago por Hora"
                        {...register("hourly", { required: true })}
                    />

                    <input type="submit" value="Agregar" />
                </form>
                <div className="rolesContainer">{rolesList}</div>
            </div>
        </div>
    );
}

export default Roles;
