import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Category from './Category';

function Categories({categoriesAmount}) {

    const [categories, setCategories] = useState([]);

    const addCategory = (category) => {
        let categoriesList = categories;
        categoriesList.push(category);
        setCategories(categoriesList)
    }

    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        addCategory(data);
        categoriesAmount(categories.length)
        reset();
    }

    const categoriesList = categories.map((element,index) => (<Category key={element.categoryName}  code={element.categoryCode} name={element.categoryName}/>))
    

    return (
        <div className="Categories">
            <div className="categoriesContent">
                <h2>Categorías</h2>
                <p>Esto nos va a servir para organizar de manera mas eficiente tu inventario.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Nombre" {...register("categoryName", {required: true})} />
                    <input type="text" placeholder="Código" {...register("categoryCode", {required: true})} />

                    <input type="submit" />
                </form>
                <div className="categoriesContainer">
                    {categoriesList}
                </div>
            </div>
        </div>
    )
}

export default Categories
