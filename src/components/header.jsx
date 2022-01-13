import * as  React from "react";
import logo from "../assets/img/logo.svg";


export default function Header(){

    return(
            <div>
                <div className="header">
                    <a href={"./"} className="title">
                        <img className="logo-aseguradora" src={logo} alt="logo" />
                        <h4>Ucab Continental</h4>
                    </a>
                    <div className="btn-sec">
                        <a href={"./sesion"} className="button">
                            Iniciar Sesion
                        </a>
                        
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


