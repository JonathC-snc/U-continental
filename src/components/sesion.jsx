import React from "react"
import Header2 from "./header2.jsx"
import Footer from "./footer.jsx"
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Sesion = () => {

    const [usuario, setUsuario] = useState({
        correo: 'jonacris2007@gmail.com',
        password: 'cristo',
    })

    const [login, setLogin] = useState({
        correo: '',
        password: '',
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login);
        if((login.correo === usuario.correo) && (login.password === usuario.password)){
            navigate('/portal')
        }else{
            alert('Error de sesion');
        }
    };

    const handleChange = (e) => 
        setLogin({ ...login, [e.target.name]: e.target.value});


    return (
    <div>
        <div>
            <Header2 />
        </div>
        <div className="session">
                <form action="" className="box-sesion">
                    <div className="title-sesion">
                        <h4>Inicio de Sesion</h4>
                    </div>
                    <div className="form-content-3">
                        <label htmlFor="">Correo</label>
                        <input name="correo" onChange={handleChange} type="text" placeholder="Correo.." />
                        <label htmlFor="">Contraseña</label>
                        <input name="password" onChange={handleChange} type="password" id="" placeholder="Contraseña.." />
                        
                    </div>
                    <div className="button-sesion">
                        <div className="button-sesion-opciones">
                            <a href={"./"}>Olvidó su clave?</a>
                            <a href={"./registro"}>Crear Cuenta</a>
                        </div>
                        
                        <button onClick={handleSubmit} type="submit" className="button">Ingresar</button>
                    </div>
                </form>
        </div>
        <div>
            <Footer />
        </div>
    </div>
    );
}

export default Sesion