import React from "react"
//import pago from "../assets/img/tarjetaseguro.jpg"
import PropTypes from  'prop-types'

const producto = ({image, title, description}) => (
    <div className="producto">
        <div className="banner-producto">
            <img src={image} alt="" />
        </div>
        <div className="title-banner">
            <h5>{title}</h5>
        </div>
        <div className="description-product">
            <p>{description}</p>
        </div>
        <div className="link-product">
            <a href="#">Ver más</a>
        </div>
    </div>
)

producto.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

producto.defaultProps = {
    image: "../assets/img/oficinaseguro.jpg",
    title: "No se encontró titulo",
    description: "descripcion no encontrada"
}

export default producto