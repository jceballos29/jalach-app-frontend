import React, { useState } from 'react'
import { RiArrowUpCircleFill, RiCheckboxCircleFill, RiCloseCircleFill } from "react-icons/ri";
import { useForm } from 'react-hook-form';


function Product({product}) {

    const [stock, setStock] = useState(product.amount)
    const [amount, setAmount] = useState(product.amount)
    const [display, setDisplay] = useState({
        edit: "block",
        save: "none"
    });
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        let difference = Math.abs(stock - data.new_stock)
        setStock(data.new_stock)
        setAmount(Number.parseInt(amount) + difference)
        setDisplay({edit: "block", save: "none"})
    }

    return (
        <form className="Product"  onSubmit={handleSubmit(onSubmit)}>
            <span>{product.code}</span>
            <span>{product.name}</span>
            <div>
                <span style={{display:`${display.edit}`}}>{stock}</span>
                <input type="number" min={stock} placeholder={stock} style={{display:`${display.save}`}} {...register("new_stock")}/>
            </div>
            <span>{product.category}</span>
            <span>{product.cost}</span>
            <span>{product.price}</span>
            <span>{amount}</span>
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
                    //TODO: Crear función elimar producto
                    console.log('Eliminar');
                }}/>
            </div>
        </form>
    )
}

export default Product
