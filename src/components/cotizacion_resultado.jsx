import React from 'react'
import Header from './header2'
import Footer from './footer'
import { Link } from 'react-router-dom'

const cotizacion_resultado = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='resultado'>
                <div className='title-resultado'>
                    <h2>Cotización</h2>
                    <h3>Te mostramos los resultados de tu cotización</h3>
                </div>
                <div className='panel-resultado'>
                    <h2>Poliza de seguro</h2>
                    <h4>Datos</h4>
                    <div className='datos-resultado'>
                        <div className='box-r'>
                            <h5>Nro de poliza <span> numero</span></h5>
                            <p>Cedula: <span> numero</span></p>
                            <p>Nombre: <span> Fulano</span> Apellido: <span> Mengano</span></p>                            
                            <p>Telefono: <span> numero</span></p>
                            <hr />
                        </div>
                        <div className='box2-r'>
                            <div className='box-r'>
                                <p>Sucursal: <span>sucursal</span></p>
                                <p>Ciudad: <span>ciudad</span></p>
                                <p>Direccion: <span>direccion</span></p>
                            </div>
                            <div className='box-r'>
                                <p>Edad: <span>numero</span></p>
                                <p>Sexo: <span>letra</span></p>
                            </div>
                        </div>
                        <div className='box-r'>
                            <hr />
                            <p>Tipo de Poliza <span>tipo</span></p>
                            <p>Tipo de Cobertura: <span>cobertura</span></p>
                            <p>Descripcion de poliza: <span>descripcion</span></p>
                            <h5>Prima: <span> numero</span></h5>
                        </div>
                    </div>
                </div>
                <div className="button-resultado">
                    <p>Si está deacuerdo presione <span>ACEPTAR</span>, de lo contrario presione <span>ATRÁS</span> y vuelva rellenar los datos</p>
                    <div className='btn-r'>
                        <Link to={"/poliza"}>
                            <button className='button'>Atras</button>
                        </Link>
                        <Link to={"/contrato"}>
                            <button className='button'>Aceptar</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default cotizacion_resultado
