import React, { useState } from 'react'
import { RiArrowUpCircleFill, RiCheckboxCircleFill, RiCloseCircleFill } from "react-icons/ri";
import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../../../actions/product.actions';


function Product({product, rut}) {

    const dispatch = useDispatch();
    const [display, setDisplay] = useState({
        edit: "block",
        save: "none"
    });
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const updatedProduct = Object.assign({
            business_rut: rut,
            code: product.code,
            name: product.name,
            category_code: product.category_code
        }, data);
        dispatch(updateProduct(rut, updatedProduct));
        reset();
        setDisplay({edit: "block", save: "none"});
    }

    return (
        <form className="Product"  onSubmit={handleSubmit(onSubmit)}>
            <span>{product.code}</span>
            <span>{product.name}</span>
            <div>
                <span style={{display:`${display.edit}`}}>{product.stock}</span>
                <input type="number" min={product.stock} placeholder={product.stock} defaultValue={product.stock} style={{display:`${display.save}`}} {...register("stock")}/>
            </div>
            <span>{product.category_code}</span>
            <div>
                <span style={{display:`${display.edit}`}}>{product.cost}</span>
                <input type="number" placeholder={product.cost} defaultValue={product.cost}style={{display:`${display.save}`}} {...register("cost")}/>
            </div>
            <div>
                <span style={{display:`${display.edit}`}}>{product.price}</span>
                <input type="number" placeholder={product.price} defaultValue={product.price} style={{display:`${display.save}`}} {...register("price")}/>
            </div>
            <div className="actions">
                <div className="updateStock">
                    <RiArrowUpCircleFill style={{cursor:'pointer', color:"#1976D2", display:`${display.edit}`}} size="20px" onClick={() => {
                        setDisplay({
                            edit: "none",
                            save: "block"
                        })
                    }}/>
                    <button type="submit"><RiCheckboxCircleFill style={{cursor:'pointer', color:"#00796B", display:`${display.save}`}} size="20px"/></button>
                </div>
                
                <RiCloseCircleFill style={{cursor:'pointer', color:'#D32F2F'}} size="20px" onClick={() => {
                    dispatch(deleteProduct(rut, product.code))
                }}/>
            </div>
        </form>
    )
}

export default Product
