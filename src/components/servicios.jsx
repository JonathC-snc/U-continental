import React from 'react';
import Header from './header';
import Footer from './footer';
import { useParams } from 'react-router-dom';

const services = [
    {
        "id": 1,
        "seccion": "Vehiculo",
        "titulo": "Seguros para Vehículo",
        "lista": "Plan a todo riesgo",
        "image": "chica_seguro",
        "description": "Protege tu inversion. Manten tu vehiculo cubierto con los completos Planes que la Poliza de Automovil de Ucab Continental tiene para ti. Elige el plan que mas a tus necesidades de proteccion: Todo Riesgo, etc y sientete tranquilo a la hora de pensar en la seguridad de tu vehiculo." 
    },
    {
        "id": 2,
        "seccion": "Vida",
        "titulo": "Seguros de Vida",
        "lista": "Plan Básico",
        "image": "tarjetaseguro",
        "description": "Tus Beneficiarios merecen una protección cuando ya no estés, por ello, ponemos a tu disposición nuestra póliza de vida, para que sigas protegiendo a los qué mas quieres aunque ya no estés" 
    },
    {
        "id": 3,
        "seccion": "Hogar",
        "titulo": "Seguros de Hogar",
        "lista": "Plan Hogar",
        "image": "oficinaseguro",
        "description": ""
    }
]



const Servicios = () => {

    const params = useParams();
    //console.log(username);
    const loadImage = require.context('../img/', true);
    const servicioActual = services.filter(c => c.id === parseInt(params.id))[0]

    return(

        servicioActual ? (
                <div>
                    <div>
                        <Header />
                    </div>
                    <div className="list-seccion">
                        <a href={"/principal"}>Home</a>
                        <span> </span>
                        <a href={'/servicio'}>Seguros</a>
                        <span> </span>
                        <a href="">{servicioActual.titulo}</a>
                    </div>
                    <div className="seguro">
                        <div className="box-seguros">
                            <div className="title-seguro">
                                <h4>{servicioActual.titulo}</h4>
                            </div>
                            <div className="list-seguro">
                                
                                    <h5>{servicioActual.lista}</h5>
                                
                            </div>
                        </div>
                        <div className="box-seguro">
                            <div className="title-seguro-box">
                                <h3>{servicioActual.titulo}</h3>
                            </div>
                            <div className="image-seguro">
                                <img src={loadImage(`./${servicioActual.image}.jpg`)} alt="" />
                            </div>
                            <div className="description-seguro">
                                <p>{servicioActual.description}</p>

                                <h2>Nuestros Productos</h2>

                                <p>Plan Básico</p>

                                <p>Plan Básico Especial</p>

                                <p>Plan Ahorro</p>

                                <p>Plan Todo Riesgo</p>
                            </div>
                        </div>
                        <div className="cotizar">
                            <h4>Cotiza con Nosotros</h4>
                            <a href={"/registro"} className="button">
                                Cotizar
                            </a>
                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>          
                </div>
        ) : (
            <div className='seguro'>
                <h1>servicio no encontrado</h1>
            </div>
        )
        
    );
}

export default Servicios