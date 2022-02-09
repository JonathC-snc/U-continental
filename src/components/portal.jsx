import * as React from "react"
import Header from "./header2"
import logo from "../assets/img/logo.svg"
import Item from "./item_poliza"
import Itemsi from "./item_siniestro"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Portal() {

    const navigate = useNavigate();

    const [poliza, setPoliza] = useState([]);
    const [siniestro, setRsiniestro] = useState([]);

    /*const siniestro = async (e) => {
        const respuesta = await fetch(`http://localhost:5000/siniestro`)
        const data = await respuesta.json();
        setSiniestro(data)
    }*/

    const poli = async (e) => {
        const res = await fetch('http://localhost:5000/poliza');
        const datap = await res.json();
        setPoliza(datap);
        console.log(poliza)
    }

    const sini = async (e) => {
        const res = await fetch('http://localhost:5000/rsiniestro');
        const datas = await res.json()
        setRsiniestro(datas);
        console.log(siniestro)
    }
    
    useEffect(() => {
        poli()
    }, [])

    useEffect(() => {
        sini()
    }, [])

    const handleExit = (e) => {
        alert('Hasta Luego!');
        navigate('/');
    }

    const handleSinister = (e) => {
        navigate('/siniestro');
    }

    const handleCotizacion = (e) => {
        navigate('/cotizacion');
    }

    const construccion = (e) => {
        alert('Funcion No Habilitada');
    }

    const handleTablesiniestro = () => {
        siniestro.map((siniestro) => (
            <Itemsi
            nro_siniestro={siniestro.nro_siniestro}
                nro_poliza={siniestro.nro_poliza}
                fecha_siniestro={siniestro.fecha_siniestro} 
                fecha_resp={siniestro.fecha_resp}
                rechazo={siniestro.rechazo}
                monto_reconocido={siniestro.monto_reconocido}
                monto_solicitado={siniestro.monto_solicitado}
            />
            )) 
        console.log('siniestro')
    }
    
    return(
        <div>
            <div>
                <Header />
            </div>
            <div className="content">
                <div className="menu-portal">
                    <h2 id="select">Portal</h2>
                    <h2 >Mis Seguros</h2>
                    <h2 onClick={handleSinister}>Siniestros</h2>
                    <h2 onClick={handleCotizacion}>Cotización</h2>
                    <h2 onClick={construccion}>Perfil</h2>
                    <h2 onClick={handleExit}>Salir</h2>
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
                        {poliza.map((poliza) => (
                                <Item 
                                    numero={poliza.nro_poliza}
                                    descripcion={poliza.descrip_poliza}
                                    prima={poliza.prima}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}