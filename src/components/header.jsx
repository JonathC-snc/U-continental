import * as  React from "react";
import logo from "../assets/img/logo.svg";


export default function Header(){

    return(
            <div>
                <div className="header">
                    <div className="title">
                        <img className="logo-aseguradora" src={logo} alt="logo" />
                        <h4>Ucab Continental</h4>
                    </div>
                    <div className="btn-sec">
                        <button className="button">Iniciar Sesion</button>
                    </div>               
                </div>
                <div aria-label="menu-nav" className="menu">
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Seguros</a>
                            </li>
                            <li>
                                <a href="#">Servicios</a>
                            </li>
                            <li>
                                <a href="#">Sobre Nosotros</a>
                            </li>
                            <li>
                                <a href="#">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            
    );
}


