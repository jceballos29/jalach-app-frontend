import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../actions/category.actions";

function Categories({ rut }) {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.categories);
    const [categoriesList, setCategoriesList] = useState();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        data = Object.assign({ business_rut: rut }, data);
        dispatch(addCategory(rut, data));
        reset();
    };

    useEffect(() => {
        if (categories) {
            setCategoriesList(
                categories.map((category) => (
                    <Category
                        key={category.code}
                        code={category.code}
                        name={category.name}
                        rut={rut}
                    />
                ))
            );
        }
    }, [categories, rut]);

    return (
        <div className="Categories">
            <div className="categoriesContent">
                <h2>Categorías</h2>
                <p>
                    Esto nos va a servir para organizar de manera mas eficiente
                    tu inventario.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Nombre"
                        {...register("name", { required: true })}
                    />
                    <input
                        type="text"
                        placeholder="Código"
                        {...register("code", { required: true })}
                    />

                    <input type="submit" />
                </form>
                <div className="categoriesContainer">{categoriesList}</div>
            </div>
        </div>
    );
}

export default Categories;
