import React from 'react';

const Item_siniestro = ({nro_siniestro, nro_poliza, fecha_siniestro, fecha_resp, rechazo, monto_reconocido, monto_solicitado}) => {
    return (
        <div className='item'>
            <div className='icon-item'>
                <i className="fas fa-file-alt icon"></i>
            </div>
            <div className='administrator'>
                <div className='details-item'>
                    <h4>Nro. Siniestro: <span> {nro_siniestro}</span></h4>
                    <p>Nro. Poliza: <span> {nro_poliza}</span></p>
                    <p>Fecha de Respuesta: <span>{fecha_resp}</span></p>
                    <p>Monto Solicitado: <span>{monto_solicitado}</span></p>
                </div>
               {/* <div className='btns-administrator'>
                    <button className='btn'>
                        <i className="fas fa-edit btn-icon"></i>
                    </button>
                    <button className='btn'>
                        <i className="fas fa-trash-alt btn-icon"></i>
                    </button>
    </div>*/}
            </div>
        </div>
    )
};

export default Item_siniestro;
