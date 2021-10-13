import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../../InitialSetup/Category';
import { addCategory } from '../../../actions/category.actions';


function CategoryRegister({path}) {

    const history = useHistory();
    const dispatch = useDispatch();
    const {categories} = useSelector((state) => state.categories);
    const {company} = useSelector((state) => state.auth);
    const [categoriesList, setCategoriesList] = useState()

    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        data = Object.assign({business_rut: company.rut}, data)
        dispatch(addCategory(company.rut,data));
        reset();
    }

    useEffect(() => {
        if(categories){
            setCategoriesList(
                categories.map((category) => (<Category key={category.code}  code={category.code} name={category.name} rut={company.rut}/>))
            );
        }
    }, [categories, company])

    return (
        <div className='CategoryRegister'>
            <div className='CatagoriesBox'>
                {categoriesList}
            </div>
            <form className='CategoryForm' onSubmit={handleSubmit(onSubmit)}>
                <div className='FormArea'>
                    <input type="text" placeholder="Nombre" {...register("name", {required: true})} />
                    <input type="text" placeholder="Código" {...register("code", {required: true})} />
                </div>
                <div className='buttonsActions'>
                    <button type='submit'>Guardar</button>
                    <button onClick={() => {
                        history.push(`${path}`);
                    }}>Regresar</button>
                </div>
            </form>
        </div>
    )
}

export default CategoryRegister
