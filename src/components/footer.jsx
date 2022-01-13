import React from "react"
import logo2 from "../assets/img/logo.svg"

const Footer = () => (
    <div className="footer-page">
        <div className="pie-pagina">
            <p>Ucontinental @2021 todos los derechos reservados</p>
        </div>
        <div className="redes">
            <p>Siguenos:</p>
            <img src={logo2} alt="" />
            <img src={logo2} alt="" />
            <img src={logo2} alt="" />
        </div>
    </div>
)

export default Footer