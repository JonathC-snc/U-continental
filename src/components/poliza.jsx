import React from 'react';
import Header from './header2';
import Footer from './footer';
import banner from '../assets/img/cotizacion_images.gif';

export default function Poliza () {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='box-poliza'>
                <div className='banner-poliza'>
                    <img src={banner} alt="" />
                </div>
                <div className='form-poliza'>
                    <h4>Cotizacion de poliza</h4>
                    <div className='formulario'>
                        <form action="" className='list'>
                            <div className='form-content'>
                                <label htmlFor="">Cedula</label>
                                <input type="text" placeholder='Cedula' />
                            </div>
                            <div className='form-content'>
                                <label htmlFor="">Nombre</label>
                                <input type="text" placeholder='Nombre' />
                            </div>
                            <div className='form-content'>
                                <label htmlFor="">Numero Telefono</label>
                                <input type="text" placeholder='Telefono' />
                            </div>
                            <div className='form-content'>
                                <label htmlFor="">Tipo Persona</label>
                                <select name="" id="">
                                    <option value="">Seleccionar</option>
                                    <option value="BENEFICIARIO">Beneficiario</option>
                                    <option value="EMPLEADO">Empleado</option>
                                    <option value="AGENTE">Agente</option>
                                    <option value="CLIENTE">Cliente</option>
                                </select>
                            </div>
                            <div className='form-content'>
                                <label htmlFor="">Tipo de Poliza</label>
                                <select name="" id="">
                                    <option value="">Seleccionar</option>
                                    <option value="">Vida</option>
                                    <option value="">Hogar</option>
                                    <option value="">Vehiculo</option>
                                </select>
                            </div>
                            <div className='form-content btn-poliza'>
                                <button type='submit' className='button'>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div>
                <Footer />
            </div>
        </div>
    );

}