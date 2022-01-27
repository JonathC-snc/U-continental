import React from "react"
//import cotizacion from "../assets/img/cotizacion_images.gif"
import Header2 from "./header2.jsx"
import Footer from "./footer.jsx"
import { Link } from "react-router-dom"
import {useState} from 'react'

export default function (){

    const [user, setUser] = useState({
        nombre_usuario: '',
        email: '',
        contrasena: '',
        nombre: '',
        apellido: '',
        edad: '',
        sexo: 'M',
        id_ciudad: 1
    });

    const handleSubmit = async function(e){
        e.preventDefault();
        const res = await fetch('http://localhost:5000/post-user', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json"}
        });
        const data = await res.json();
    };

    const handleChange = function(e){
        setUser({...user, [e.target.name]: e.target.value});
    };

    return (
        <div>
            <div>
                <Header2 />
            </div>
            <div className="formulario">
                <h2>Registro</h2>
                <p>Para continuar con la cotización rellena tus datos para el registro</p>
                <form onSubmit={handleSubmit} className="list" onChange={handleChange}>
                    <div className="form-content">
                        <label htmlFor="">Nombre Usuario</label>
                        <input required id="usuario" type="text" name="nombre_usuario" placeholder="Usuario.."/>
                    </div>
                    <div className="form-content">
                        <label htmlFor="">Correo</label>
                        <input type="email" name="email" placeholder="Correo.."/>
                    </div>
                    <div className="form-content">
                        <label htmlFor="">Contraseña</label>
                        <input type="password" name="contrasena" placeholder="Contraseña.."/>
                    </div>
                    <div className="form-content">
                        <label htmlFor="">Nombre</label>
                        <input type="text" name="nombre" placeholder="Nombre" />
                    </div>
                    <div className="form-content">
                        <label htmlFor="">Apellido</label>
                        <input type="text" name="apellido" placeholder="Apellido" />
                    </div> 
                    <div className="form-content"> 
                        <label htmlFor="">Edad</label>
                        <input type="text" name="edad" placeholder="Edad" />
                    </div>
                    <div className="form-content">
                        <label htmlFor="">Sexo</label>
                        <select id="" >
                            <option name="sexo" value="M" selected>M</option>
                            <option name="sexo" value="F">F</option>
                            <option name="sexo" value="N/A">N/A</option>
                        </select>
                    </div>
                    <div className="form-content">
                        <label htmlFor="ciudad">Ciudad</label>
                        <select id="ciudad" name="id_ciudad">
                            <option value="caracas">Caracas</option>
                            <option value="valencia">Valencia</option>
                        </select>
                    </div>
                    <div className="form-content-2">
                        <Link to={'/cotizacion'}>
                            <button type="submit" className="button">Registrar</button>
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