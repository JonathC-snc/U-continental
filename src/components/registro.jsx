import React from "react"
//import cotizacion from "../assets/img/cotizacion_images.gif"
import Header2 from "./header2.jsx"
import Footer from "./footer.jsx"
import { Link } from "react-router-dom"
import {useState} from 'react'

export default function Registro(){

    const [user, setUser] = useState({
        nombre_usuario: '',
        email: '',
        contrasena: '',
        nombre: '',
        apellido: '',
        edad: '',
        sexo: '',
        id_ciudad: '',
    });

    const handleSubmit = async function(e){
        console.log(user);
        e.preventDefault();
        const res = await fetch('http://localhost:5000/post-user', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json"}
        });
        const data = await res.json();
    };

    const handleChange = function(e){
        setUser({...user, [e.target.name]: e.currentTarget.value});
    };

    return (
        <div>
            <div>
                <Header2 />
            </div>
            <div className="formulario">
                <h2>Registro</h2>
                <p>Para continuar con la cotización rellena tus datos para el registro</p>
                <form className="list">
                    <div className="form-content">
                        <label htmlFor="">Nombre Usuario</label>
                        <input required id="usuario" type="text" onChange={handleChange} name="nombre_usuario" placeholder="Usuario.."/>
                    </div>
                    <div className="form-content">
                        <label htmlFor="">Correo</label>
                        <input type="email" name="email" onChange={handleChange} placeholder="Correo.."/>
                    </div>
                    <div className="form-content">
                        <label htmlFor="">Contraseña</label>
                        <input type="password" name="contrasena" onChange={handleChange} placeholder="Contraseña.."/>
                    </div>
                    <div className="form-content">
                        <label htmlFor="">Nombre</label>
                        <input type="text" name="nombre" onChange={handleChange} placeholder="Nombre" />
                    </div>
                    <div className="form-content">
                        <label htmlFor="">Apellido</label>
                        <input type="text" name="apellido" onChange={handleChange} placeholder="Apellido" />
                    </div> 
                    <div className="form-content"> 
                        <label htmlFor="">Edad</label>
                        <input type="text" name="edad" onChange={handleChange} placeholder="Edad" />
                    </div>
                    <div className="form-content">
                        <label htmlFor="">Sexo</label>
                        <select name="sexo" id="" onChange={handleChange}>
                            <option value="?">Seleccionar</option>
                            <option value="M">M</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    <div className="form-content">
                        <label htmlFor="ciudad">Ciudad</label>
                        <select id="ciudad" name="id_ciudad" onChange={handleChange}>
                            <option value="?">Seleccionar</option>
                            <option value="1">Caracas</option>
                            <option value="2">Valencia</option>
                            <option value="3">Maracaibo</option>
                            <option value="4">Barquisimeto</option>
                            <option value="5">Barcelona</option>
                            <option value="6">Merida</option>
                        </select>
                    </div>
                    <div className="form-content-2">
                        <Link to={'/cotizacion'}>
                            <button type="submit" onClick={handleSubmit} className="button">Registrar</button>
                        </Link>
                    </div>
                </form>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}