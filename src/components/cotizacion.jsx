import React from 'react';
import { useState } from 'react';
import Header from './header2';
import Footer from './footer';
import Formveh from './form_vehiculo';
import Formvid from './form_vida';
import Formhog from './form_hogar';
//import Error_404 from './error_404';
import banner from '../assets/img/cotizacion_images.gif';
import { Link } from 'react-router-dom';

const Cotizacion = () => {
    
    const [value, setValue] = useState("no seleccionado");
    let component = <h4>Loading..</h4>;
    console.log(value);
    
    if (value === 'VEHICULO'){
        component = <Formveh />
    }else{
        if(value === 'VIDA'){
            component = <Formvid />
        }else{
            if(value === 'HOGAR'){
                component = <Formhog />
            }
        }
    }
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
                                            <select value={value} name="" id="" onChange={e => setValue(e.currentTarget.value)}>
                                                <option value="?">Seleccionar</option>
                                                <option value="VIDA">Vida</option>
                                                <option value="HOGAR">Hogar</option>
                                                <option value="VEHICULO">Vehiculo</option>
                                            </select>
                                        </div>
                                        <div className='box-formveh'>
                                            {component}
                                        </div>
                                        <div className='form-content btn-poliza'>
                                            <Link  to={"/cotizacion/:id"}>
                                                <button type='submit' className='button'>Enviar</button>
                                            </Link> 
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                        <div>
                            <Footer />
                        </div>
                    </div>
        )
}

export default Cotizacion