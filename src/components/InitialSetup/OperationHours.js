import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function OperationHours({hourly}) {

    const [disabled, setDisabled] = useState(false)
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
        hourly(true)
        setDisabled(true)
    }

    return (
        <div className="OperationHours">
            <h2>Horario de atención</h2>
            <p>Esto ayudará a gestionar mas fácil los turnos de tus empeados.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <b>Horario de apertura:</b>
                    <input type="time" placeholder="openingTime" {...register("openingTime", {required: true})} />
                </label>
                <label>
                    <b>Horario de cierre:</b>
                    <input type="time" placeholder="closingTime" {...register("closingTime", {required: true})} />
                </label>

                <input type="submit" value="Guardar" disabled={disabled}/>
            </form>
        </div>
    )
}

export default OperationHours
