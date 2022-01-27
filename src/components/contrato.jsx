import React from 'react'
import Header2 from './header2'
import Footer from './footer'
import { Link } from 'react-router-dom'

const Contrato = () => {
  return (
      <div>
          <div>
              <Header2 />
          </div>
          <div className='box-contrato'>
            <h1>Felicidades! su Póliza de contrato se ha generado con éxito.</h1>
            <h3>Gracias por confiar en Ucabcontinental</h3>
            <hr />
            <p>Si desea descargar un copia de su póliza presione aquí</p>
            <p>Opción deshabilitada, Muy Pronto Disponible!</p>
            <div>
                <button className='center button'>
                    <i className='fas fa-file-alt icon'></i>
                    <p>Descargar PDF</p>
                </button>
            </div>
            <p>De lo contrario continue a su portal Ucontinental</p>
            <Link to={'/portal'}>
                <button className='button'>Seguir a Mi Portal</button>
            </Link>
          </div>
          <div>
              <Footer />
          </div>
      </div>
  )
};

export default Contrato
