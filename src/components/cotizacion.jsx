import React from "react"
import cotizacion from "../assets/img/cotizacion_images.gif"
import Header2 from "./header2.jsx"
import Footer from "./footer.jsx"
import Principal from "./principal.jsx"

const Cotizacion = () => (
    <div>
        <div>
            <Header2 />
        </div>
        <div className="formulario">
            <h2>Registro</h2>
            <form method="POST" action="/registro/insertar" className="list">
                <div className="form-content">
                    <label htmlFor="">Nombre Usuario</label>
                    <input required id="usuario" type="text" name="usario" placeholder="Usuario.." />
                </div>
                <div className="form-content">
                    <label htmlFor="">Correo</label>
                    <input type="email" placeholder="Correo.." />
                </div>
                <div className="form-content">
                    <label htmlFor="">Contraseña</label>
                    <input type="password" placeholder="Contrasela.."  />
                </div>
                <div className="form-content">
                    <label htmlFor="">Nombre</label>
                    <input type="text" placeholder="Nombre" />
                </div>
                <div className="form-content">
                    <label htmlFor="">Apellido</label>
                    <input type="text" placeholder="Apellido" />
                </div> 
                <div className="form-content"> 
                    <label htmlFor="">Edad</label>
                    <input type="text" placeholder="Edad" />
                </div>
                <div className="form-content">
                    <label htmlFor="">Sexo</label>
                    <select name="" id="">
                        <option value="M" selected>M</option>
                        <option value="F">F</option>
                        <option value="N/A">N/A</option>
                    </select>
                </div>
                <div className="form-content">
                    <label htmlFor="">Ciudad</label>
                    <select name="" id="">
                        <option value="caracas">Caracas</option>
                        <option value="valencia">Valencia</option>
                    </select>
                </div>
                <div className="form-content-2">
                    <a href={Principal}>
                        <button type="submit" className="button">Registrar</button>
                    </a>
                </div>
            </form>
        </div>
        <div>
            <Footer />
        </div>
    </div>
)

export default Cotizacion

