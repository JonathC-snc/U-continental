import React from 'react';

const Cliente = ({handleClient}) => {
  return (
      
    <div className='box-formveh'>
        <div className='form-poliza'>
            <div className='formulario'>
                <div action="" className='list'>
                    <div className='form-content'>
                        <label htmlFor="">Apellido</label>
                        <input name="apellido_cliente" onChange={handleClient} type="text" placeholder='Apellido' />
                    </div>
                    <div className='form-content'>
                        <label htmlFor="">Dirección</label>
                        <input name="direc_cliente" onChange={handleClient} type="text" placeholder='Dirección' />
                    </div>
                    <div className='form-content'>
                        <label htmlFor="">Calle</label>
                        <input name="calle" onChange={handleClient} type="text" placeholder='Calle' />
                    </div>
                    <div className='form-content'>
                        <label htmlFor="">Ciudad</label>
                        <select id="" name="id_ciudad" onChange={handleClient}>
                            <option value="?">Seleccionar</option>
                            <option value="1">Caracas</option>
                            <option value="2">Valencia</option>
                            <option value="3">Maracaibo</option>
                            <option value="4">Barquisimeto</option>
                            <option value="5">Barcelona</option>
                            <option value="6">Merida</option>
                        </select>
                        
                    </div>
                    <div className='form-content'>
                        <label htmlFor="">Genero</label>
                        <select name="genero" onChange={handleClient} id="">
                            <option value="?">Seleccionar</option>
                            <option value="F">Femenino</option>
                            <option value="M">Masculino</option>
                        </select>
                    </div>
                    <div className='form-content'>
                        <label htmlFor="">Fecha de Nacimiento</label>
                        <input name="fecha_nac" onChange={handleClient} type="text" />
                    </div>
                    <div className='form-content'>
                        <label htmlFor="">Profesion</label>
                        <input name="profesion" onChange={handleClient} type="text" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Cliente;
