import React from 'react';

const Form_vehiculo = ({handleVehiculo}) => {

/*    const [veh, setVeh] = useState({
        matricula: "",
        marca: "",
        modelo: "",
        anio: "",
        tipo_categoria: "",
        tipo_cobertura: "",
    });

    const handleVehiculo = (e) => 
        setVeh({...veh, [e.target.name]: e.currentTarget.value});*/
    

    return (
        <div className='box-formveh'>
            <div className='form-poliza'>
                <div className='formulario'>
                    <div action="" className='list'>
                        <div className='form-content'>
                            <label htmlFor="">Matricula</label>
                            <input name="matricula" onChange={handleVehiculo} type="text" placeholder='Matricula' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Marca</label>
                            <input name="marca" onChange={handleVehiculo} type="text" placeholder='Marca' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Modelo</label>
                            <input name="modelo" onChange={handleVehiculo} type="text" placeholder='Modelo' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Año</label>
                            <input name="annio" onChange={handleVehiculo} type="text" placeholder='Año' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Categotria</label>
                            <select name="id_tipo_categoria" onChange={handleVehiculo} id="">
                                <option value="?">Seleccionar</option>
                                <option value="UTILITARIO">Utilitario</option>
                                <option value="GAMA MEDIA">Gama media</option>
                                <option value="GAMA ALTA">Gama Alta</option>
                                <option value="GRAN TURISMO">Gran Turismo</option>
                                <option value="LUJO">Lujo</option>
                            </select>
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Tipo de Cobertura</label>
                            <select name="id_tipo_cobertura" onChange={handleVehiculo} id="">
                                <option value="?">Seleccionar</option>
                                <option value="TODO RIESGO">Todo Riesgo</option>
                                <option value="FRANQUICIA">Franquicia</option>
                                <option value="TERCEROS">Terceros</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form_vehiculo
