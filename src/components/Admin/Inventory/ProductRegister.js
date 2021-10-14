import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import {useHistory} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { registerProduct } from '../../../actions/product.actions';

function ProductRegister({path}) {

    const history = useHistory();
    const dispatch = useDispatch();
    const {categories} = useSelector((state) => state.categories);
    const {company} = useSelector((state) => state.auth);

    const [categorieList, setCategorieList] = useState();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data = Object.assign({business_rut: company.rut}, data)
        dispatch(registerProduct(company.rut, data))
        reset();
        history.push(`${path}`)
    }

    useEffect(() => {
        if(categories){
            setCategorieList(
                categories.map( category => (<option key={category.code} value={category.code}>{category.name}</option>))
            );
        }
    }, [categories])

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
                    <input type="number" placeholder="Cantidad" min={1} defaultValue={1} {...register("stock", {required: true})} />
                </div>
                <div className="category">
                    <select {...register("category_code", { required: true })}>
                        {categorieList}
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
                <div className='cancel'>
                    <button onClick={()=>{
                        reset();
                        history.push(`${path}`);
                    }}>Cancelar</button>
                </div>
            </form>

    )
}

export default ProductRegister
