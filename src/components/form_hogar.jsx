import React from 'react'

const Form_hogar = () => {
    return (
        <div className='box-formveh'>
            <div className='form-poliza'>
                <div className='formulario'>
                    <form action="" className='list'>
                        <div className='form-content'>
                            <label htmlFor="">Direcion</label>
                            <textarea name="Direccion" id="" cols="30" rows="10" placeholder='Direccion'></textarea>
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Valor</label>
                            <input type="text" placeholder='Valor' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Contenido</label>
                            <input type="text" placeholder='Contenido' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Riesgos Auxiliares</label>
                            <input type="text" placeholder='Riesgos' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form_hogar 
