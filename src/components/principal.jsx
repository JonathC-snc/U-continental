import React from "react"
import Producto from "./producto.jsx"
import Footer from "./footer.jsx"
import Header from "./header"
import { Link } from "react-router-dom"

const productos = [
    {
        "id": 1,
        "image": 'tarjetaseguro.jpg',
        "title": "Opciones de pago",
        "description": "para tu comodidad hemos desarrollado diferentes formas de pagar tus pólizas"
    },
    {
        "id": 2,
        'image': 'oficinaseguro.jpg',
        "title": "Sedes",
        "description": "Encuentra la oficina mas cerca a tu hogar"
    },
    {
        "id": 3,
        'image': 'sociosseguro.jpg',
        "title": "Socios",
        "description": "Más de 111 socios exclusivos de Ucab Continental"
    }
]

const loadImage = require.context('../assets/img/', true);

const Principal = () => (
    <div className="principal">
        <div>
            <Header />
        </div>
        <div className="banner">
            <h4>Bienvenido</h4>
            <h5>los mejores servicios para que permanezcas seguro</h5>
        </div>
        <div className="seccion-1">
            <h5>Nuestros Productos</h5>
            <div className="productos">
                <div className="seccion-circle">
                    <div className="circle">
                        <Link to={'/servicio/1'}>
                            <i className="fas fa-car icon"></i>
                        </Link>
                    </div>
                    <p>Automoviles</p>
                </div>
                <div className="seccion-circle">
                    <div className="circle">
                        <Link to={'/servicio/2'}>
                            <i className="fas fa-heartbeat icon"></i>
                        </Link>
                    </div>
                    <p>Vidas</p>
                </div>
                <div className="seccion-circle">
                    <div className="circle">
                        <i className="fas fa-exclamation icon"></i>
                    </div>
                    <p>Accidentes</p>
                </div>
                <div className="seccion-circle">
                    <div className="circle">
                        <Link to={'/servicio/3'}>
                            <i className="fas fa-home icon"></i>
                        </Link>
                    </div>
                    <p>Hogar</p>
                </div> 
            </div>
        </div>
        <div className="seccion-2">
            { productos.map(c => (
                <Producto 
                    key={c.id}
                    id={c.id}
                    image={loadImage(`./${c.image}`)}
                    title={c.title}
                    description={c.description}
                />
            ))}
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
)

export default Principal