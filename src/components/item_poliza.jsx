import React from 'react'

const item_poliza = ({numero, descripcion, prima, fecha_resp}) => {
    return (
        <div className='item'>
            <div className='icon-item'>
                <i className="fas fa-file-alt icon"></i>
            </div>
            <div className='administrator'>
                <div className='details-item'>
                    <h4>Nro. Poliza: <span> {numero}</span></h4>
                    <p>Descripcion: <span> {descripcion}</span></p>
                    <p>Prima: <span>{prima}</span></p>
                    <p>Fecha: <span>{fecha_resp}</span></p>
                </div>
                <div className='btns-administrator'>
                    <button className='btn'>
                        <i className="fas fa-edit btn-icon"></i>
                    </button>
                    <button className='btn'>
                        <i className="fas fa-trash-alt btn-icon"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default item_poliza

