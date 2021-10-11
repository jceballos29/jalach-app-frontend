import React from 'react';
import "../css/Register.css";
import { FaAddressCard, FaUser } from 'react-icons/fa';
import { IoMdBusiness} from 'react-icons/io';
import { MdEmail, MdLocationOn, MdSmartphone } from 'react-icons/md'
import { RiLockPasswordFill } from "react-icons/ri";
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {registerCompany} from '../actions/auth.action'


function Register() {

    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    

    const onSubmit = data => {
        try {
            dispatch(registerCompany(data))
            reset();
            //TODO: Realizar aviso de registro existoso
            setTimeout(() => {
                history.push('/login');
            }, 1000);
        } catch (error) {
            reset();
        }
    }



    return (
        <div className="Register">
            <div className="registerBanner">
                <h1>JALACH</h1>
                <p>El asistente perfecto para adminitrar su negocio.</p>
            </div>
            <div className="registerContent">
                <div className="registerContainer">
                    <h2>Registro</h2>
                    <p>¿Ya tienes una cuenta? Inicia sesión <Link to="/login">aquí.</Link></p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="formGroup">
                            <h3>Información del negocio</h3>
                            <div className="inputGroup">
                                <div className="formInput">
                                    <FaAddressCard size="20px" />
                                    <input type="text" placeholder="Registro Único Empresarial" {...register("rut", {required: true})} />
                                </div>
                                <div className="formInput">
                                    <IoMdBusiness size="20px"/>
                                    <input type="text" placeholder="Razón Social" {...register("business_name", {required: true})} />
                                </div>
                                
                            </div>    
                        </div>

                        <div className="formGroup">
                            <h3>Información de acceso</h3>
                            <div className="inputGroup">
                                <div className="formInput">
                                    <FaUser size="20px"/>
                                    <input type="text" placeholder="Usuario" {...register("user", {required: true})} />    
                                </div>
                                <div className="formInput">
                                    <MdEmail size="20px"/>
                                    <input type="email" placeholder="Correo Electrónico" {...register("email", {required: true})} />
                                </div>
                                <div className="formInput">
                                    <RiLockPasswordFill size="20px"/>
                                    <input type="password" placeholder="Contraseña" {...register("password", {required: true})} />
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="formGroup">
                            <h3>Información de ubicación</h3>
                            <div className="inputGroup">
                                <div className="formInput">
                                    <MdLocationOn size="20px"/>
                                    <input type="text" placeholder="País" {...register("country", {required: true})} />
                                </div>
                                <div className="formInput">
                                    <MdLocationOn size="20px"/>
                                    <input type="text" placeholder="Ciudad" {...register("city", {required: true})} />
                                </div>
                                <div className="formInput">
                                    <MdSmartphone size="20px"/>
                                    <input type="tel" placeholder="Teléfono Celular" {...register("phone", {required: true})} />
                                </div>
                            </div>
                        </div>

                        <div className="registerButton">
                            <input type="submit" value="Registar"/>
                        </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Register
