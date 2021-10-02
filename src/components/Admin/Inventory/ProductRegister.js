import React from 'react'
import { useForm } from 'react-hook-form';
import {useHistory} from 'react-router-dom'

function ProductRegister({path}) {

    const history = useHistory();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
        history.push(`${path}`)
    }

    return (

            <form onSubmit={handleSubmit(onSubmit)} className="ProductRegister">
            <h3 className="title">Registro de Producto</h3>

            <div className="code">
                <input type="number" placeholder="Código" {...register("code", {required: true})} />            
            </div>
            <div className="name">
                <input type="text" placeholder="Nombre" {...register("name", {required: true})} />
            </div>    
            <div className="amount">
                <input type="number" placeholder="Cantidad" min={1} defaultValue={1} {...register("amount", {required: true})} />
            </div>
            <div className="category">
                <select {...register("category", { required: true })}>
                    <option value="Cervezas">Cervezas</option>
                    <option value="Pasabocas">Pasabocas</option>
                </select>
            </div>
            <div className="cost">
                <input type="number" placeholder="Costo" {...register("cost", {required: true})} />
            </div>
            <div className="price">
                <input type="number" placeholder="Precio" {...register("price", {required: true})} />
            </div>

            <div className="addProduct">
                <input type="submit" value="Agregar"/>    
            </div>    
        </form>

    )
}

export default ProductRegister
