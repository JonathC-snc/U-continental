import React from 'react'

const Form_hogar = ({handleHogar}) => {
    return (
        <div className='box-formveh'>
            <div className='form-poliza'>
                <div className='formulario'>
                    <div action="" className='list'>
                        <div className='form-content'>
                            <label htmlFor="">Direcion</label>
                            <textarea name="direc_inmueble" onChange={handleHogar} id="" cols="30" rows="10" placeholder='Direccion'></textarea>
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Valor</label>
                            <input name="valor" onChange={handleHogar} type="text" placeholder='Valor' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Contenido</label>
                            <input name="contenido" onChange={handleHogar} type="text" placeholder='Contenido' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Riesgos Auxiliares</label>
                            <input name="riesgo_aux" onChange={handleHogar} type="text" placeholder='Riesgos' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form_hogar 
