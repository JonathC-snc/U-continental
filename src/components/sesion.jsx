import React from "react"
import Header2 from "./header2.jsx"
import Footer from "./footer.jsx"

const Sesion = () => (
    <div>
        <div>
            <Header2 />
        </div>
        <div className="session">
                <form action="" className="box-sesion">
                    <div className="title-sesion">
                        <h4>Inicio de Sesion</h4>
                    </div>
                    <div className="form-content">
                        <label htmlFor="">Correo</label>
                        <input type="text" placeholder="Correo.." />
                        <label htmlFor="">Contraseña</label>
                        <input type="password" name="" id="" placeholder="Contraseña.." />
                        
                    </div>
                    <div className="button-sesion">
                        <a href="">Olvidó su clave?</a>
                        <button type="submit" className="button">Ingresar</button>
                    </div>
                </form>
        </div>
        <div>
            <Footer />
        </div>
    </div>
)

export default Sesion