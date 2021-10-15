import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { businessHours } from "../../actions/auth.action";

function OperationHours({ disable }) {
    const dispatch = useDispatch();
    const { company } = useSelector((state) => state.auth);
    const [disabled, setDisabled] = useState(disable);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        try {
            dispatch(businessHours(company.rut, data));
            setDisabled(true);
        } catch (error) {
            throw error;
        }
    };

    return (
        <div className="OperationHours">
            <h2>Horario de atención</h2>
            <p>
                Esto ayudará a gestionar mas fácil los turnos de tus empeados.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <b>Horario de apertura:</b>
                    <input
                        type="time"
                        placeholder="openingTime"
                        {...register("opening_time", { required: true })}
                    />
                </label>
                <label>
                    <b>Horario de cierre:</b>
                    <input
                        type="time"
                        placeholder="closingTime"
                        {...register("closing_time", { required: true })}
                    />
                </label>

                <input type="submit" value="Guardar" disabled={disabled} />
            </form>
        </div>
    );
}

export default OperationHours;
