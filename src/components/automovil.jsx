import React from "react"
import Header from "./header"
import mujer from "../assets/img/chica_seguro.jpg"
import Footer from "./footer"

export default function Automovil() {
    return(
        <div>
            <div>
                <Header />
            </div>
            <div className="list-seccion">
                <a href="">Home</a>
                <span> </span>
                <a href="">Seguros</a>
                <span> </span>
                <a href="">Automovil</a>
            </div>
            <div className="seguro">
                <div className="box-seguros">
                    <div className="title-seguro">
                        <h4>Seguros de Automovil</h4>
                    </div>
                    <div className="list-seguro">
                        <h5>Plan Basico</h5>
                        <h5>Plan Ahorro</h5>
                        <h5>Plan Todo Riesgo</h5>
                    </div>
                </div>
                <div className="box-seguro">
                    <div className="title-seguro-box">
                        <h3>Seguro de Automóvil</h3>
                    </div>
                    <div className="image-seguro">
                        <img src={mujer} alt="" />
                    </div>
                    <div className="description-seguro">
                        <p>Protege tu inversion. Manten tu vehiculo cubierto con los completos
                           Planes que la Poliza de Automovil de Ucab Continental tiene para ti.
                           Elige el plan que mas a tus necesidades de proteccion: Todo Riesgo, etc
                           y sientete tranquilo a la hora de pensar en la seguridad de tu vehiculo. 
                        </p>

                        <h2>Nuestros Productos</h2>

                        <p>Plan Basico</p>

                        <p>Plan Basico Especial</p>

                        <p>Plan Ahorro</p>

                        <p>Plan Todo Riesgo</p>
                    </div>
                </div>
                <div className="cotizar">
                    <h4>Cotiza sin Compromiso</h4>
                    <a href={"./poliza"} className="button">
                        Cotizar
                    </a>
                </div>
            </div>
            <div>
                <Footer />
            </div>          
        </div>
    );
}