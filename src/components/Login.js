import React from "react";
import "../css/Login.css";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginCompany } from "../actions/auth.action";
import { Redirect } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    // const history = useHistory();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        try {
            dispatch(loginCompany(data));
            reset();
            window.location.reload();
            // history.push("/company")
        } catch (error) {
            throw error;
        }
    };

    if (isLoggedIn) {
        return <Redirect to="/company" />;
    }

    return (
        <div className="Login">
            <div className="loginContent">
                <div className="loginContainer">
                    <h2>Ingresar</h2>
                    <p>
                        Aún no tienes cuenta? Regístrate{" "}
                        <Link to="/register">aquí.</Link>
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="inputGroup">
                            <div className="loginIcon">
                                <FaUser size="25px" />
                            </div>
                            <input
                                type="text"
                                placeholder="Usuario"
                                {...register("user", { required: true })}
                            />
                        </div>
                        <div className="inputGroup">
                            <div className="loginIcon">
                                <RiLockPasswordFill size="25px" />
                            </div>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                {...register("password", { required: true })}
                            />
                        </div>
                        <div className="loginButton">
                            <input type="submit" value="Ingresar" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="loginBanner">
                <h1>JALACH</h1>
                <p>El asistente perfecto para adminitrar su negocio.</p>
            </div>
        </div>
    );
}

export default Login;
