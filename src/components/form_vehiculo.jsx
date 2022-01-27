import React from 'react'

const form_vehiculo = () => {
    return (
        <div className='box-formveh'>
            <div className='form-poliza'>
                <div className='formulario'>
                    <form action="" className='list'>
                        <div className='form-content'>
                            <label htmlFor="">Matricula</label>
                            <input type="text" placeholder='Matricula' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Marca</label>
                            <input type="text" placeholder='Marca' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Modelo</label>
                            <input type="text" placeholder='Modelo' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Año</label>
                            <input type="text" placeholder='Año' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Categotria</label>
                            <select name="" id="">
                                <option value="UTILITARIO">Utilitario</option>
                                <option value="GAMA MEDIA">Gama media</option>
                                <option value="GAMA ALTA">Gama Alta</option>
                                <option value="GRAN TURISMO">Gran Turismo</option>
                                <option value="LUJO">Lujo</option>
                            </select>
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Tipo de Cobertura</label>
                            <select name="" id="">
                                <option value="TODO RIESGO">Todo Riesgo</option>
                                <option value="FRANQUICIA">Franquicia</option>
                                <option value="TERCEROS">Terceros</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default form_vehiculo
