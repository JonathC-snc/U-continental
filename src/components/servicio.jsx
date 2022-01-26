import React from 'react';
import Header from './header';
import Footer from './footer';
import Producto from './producto';
import PropTypes from 'prop-types';
import image1 from '../img/chica_seguro.jpg';
import image2 from '../img/oficinaseguro.jpg';
import image3 from '../img/tarjetaseguro.jpg';

//rafce

const products = [
    {
        "id": 1,
        "image": 'chica_seguro.jpg',
        "tittle": "Seguros de Vehiculo",
        "description": "Protege tu inversion. Manten tu vehiculo cubierto con los completos Planes que la Poliza de Automovil de Ucab Continental tiene para ti." 
    },
    {
        "id": 2,
        "image": 'oficinaseguro.jpg',
        "tittle": "Seguros de Vida",
        "description": "Protege tu inversion. Manten tu vehiculo cubierto con los completos Planes que la Poliza de Automovil de Ucab Continental tiene para ti." 
    },
    {
        "id": 3,
        "image": 'tarjetaseguro.jpg',
        "tittle": "Seguros para el Hogar",
        "description": "Protege tu inversion. Manten tu vehiculo cubierto con los completos Planes que la Poliza de Automovil de Ucab Continental tiene para ti." 
    }
]

const loadImage = require.context('../img/',true);

export default function otro() {
    return(
        <div>
            <div>
                <Header />
            </div>
            <div className='seccion-3'>
                <h1>Nuestros Servicios</h1>
            </div>
            <div className='servicio'>
                { products.map (c =>(
                    <Producto
                        image={loadImage(`./${c.image}`)} 
                        title={c.tittle}
                        description={c.description}
                        key={c.id}
                        id={c.id}
                    />
                ))}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );

}

