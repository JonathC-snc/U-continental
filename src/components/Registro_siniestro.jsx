import React from 'react';
import {useEffect, useState} from 'react';
import Header from './header';


const Registro_siniestro = () => {

    const [sinister, setSiniestro] = useState([]);
    const [poliza, setPoliza] = useState([]);

    const siniestro = async (e) => {
        const respuesta = await fetch(`http://localhost:5000/siniestro`)
        const data = await respuesta.json();
        setSiniestro(data)
    }

    const poli = async (e) => {
        const res = await fetch('http://localhost:5000/poliza')
        const datap = await res.json()
        setPoliza(datap)
    }
    
    useEffect(() => {
        siniestro()
        poli()
    }, [])
    
    const handleSubmit = (e) => {
        console.log('Submit')
    }

  return (
    <div>
        <div>
            <Header />
        </div>
        <div className='box box-poliza'>
            <div className='form-formulario'>
                <h4>Siniestro</h4>
                <div className='formulario'>
                    <form onSubmit={handleSubmit} className='list'>
                        <div className='form content'>
                            {
                                sinister.map(sinister =>(
                                    <label htmlFor="">`Nro de siniestro: {sinister.nro_siniestro}`</label>

                                ))

                            }
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">fecha de siniestro</label>
                            <input type="text" name='fecha_siniestro' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">fecha de respuesta</label>
                            <input type="text" name='' />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
    )
};

export default Registro_siniestro;
