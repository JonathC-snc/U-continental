import React from 'react'

const Form_vida = ({handleVida}) => {
    return (
        <div className='box-formveh'>
            <div className='form-poliza'>
                <div className='formulario'>
                    <div action="" className='list'>
                        <div className='form-content'>
                            <label htmlFor="">Prima</label>
                            <input name="prima" onChange={handleVida} type="text" placeholder='Prima' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Cobertura</label>
                            <input name="cobertura" onChange={handleVida} type="text" placeholder='Cobertura' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  
};

export default Form_vida
