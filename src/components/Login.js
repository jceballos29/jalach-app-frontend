import React from 'react'
// import "../css/Login.css"
import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useHistory } from 'react-router-dom';


function Login() {

    const history = useHistory();
    
    const { register, handleSubmit, reset } = useForm();
    // TODO: Realzar mensaje de error al user o password incorrectos
    // formState: { errors },
    const onSubmit = data => {
        console.log(data);
        history.push("/start-setup")
        reset();
    }

    return (
        <div className="Login">
            <div className="loginContent">
                <div className="loginContainer">
                    <h2>Ingresar</h2>
                    <p>Aún no tienes cuenta? Regístrate <Link to="/register">aquí.</Link></p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputGroup">
                        <div className="loginIcon">
                            <FaUser size="25px"/>
                        </div>
                        <input type="text" placeholder="Usuario" {...register("user", {required: true})} />
                    </div>
                    <div className="inputGroup">
                        <div className="loginIcon">
                            <RiLockPasswordFill size="25px"/>
                        </div>
                        <input type="password" placeholder="Contraseña" {...register("password", {required: true})} />    
                    </div>
                    <div className="loginButton">
                        <input type="submit" value="Ingresar"/> 
                    </div>
                </form>
                </div>
            </div>
            <div className="loginBanner">
                <h1>JALACH</h1>
                <p>El asistente perfecto para adminitrar su negocio.</p>
            </div>
        </div>
    )
}

export default Login
