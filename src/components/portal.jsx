import * as React from "react"
import Header from "./header2"
import logo from "../assets/img/logo.svg"
import Item from "./item_poliza"

export default function Portal() {
    return(
        <div>
            <div>
                <Header />
            </div>
            <div className="content">
                <div className="menu-portal">
                    <h2 id="select">Portal</h2>
                    <h2>Mis Seguros</h2>
                    <h2>Solicitudes</h2>
                    <h2>Cotizacion</h2>
                    <h2>Perfil</h2>
                    <h2>Cerrar Sesion</h2>
                </div>
                <div className="portal-sec">
                    <div className="title-box">
                        <div className="title-portal">
                            <h3>Bienvenido a tu Portal Continental</h3>
                            <p>maneja y cotiza tus seguros en pocos clicks</p>
                        </div>
                        <div className="logo-portal">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="table-portal">
                        {/*<h2>Tus Polizas apareceran aqui</h2>*/}
                        <Item />
                    </div>
                </div>
            </div>
        </div>
    );
}