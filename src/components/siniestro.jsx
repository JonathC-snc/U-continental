import React from 'react';
import Header from './header2';
import Footer from './footer';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Siniestro = () => {

    const navigate = useNavigate();

    const [sini, setSini] = useState ({
        descp_siniestro: "",
    });

    const [acc, setAcc] = useState ({
        fecha_acc: "",
        lugar_acc: "",
        hora_acc: "",
    });

    const [cat, setCat] = useState ({
        descrip_cat: "",
        descrip_subcateg: "",
    })
 
    
    const handleAccidente = (e) => {
        setAcc({...acc, [e.target.name]: e.currentTarget.value});
    }

    const handleSiniestro = (e) => {
        setSini({...sini, [e.target.name]: e.currentTarget.value});
    }
    
    const handleCategoria = (e) => {
        setCat({...cat, [e.target.name]: e.currentTarget.value});
    }
    
    const handleSubmit = async (e) => {

        e.preventDefault();
        const res = await fetch("http://localhost:5000/post-crearSiniestro", {
            method: "POST",
            body: JSON.stringify(sini),
            headers: { "Content-Type": "application/json"},   
            });

        const data = await res.json();
        console.log(data);

        navigate('/portal')

    }
    /*const subAcc = (e) => {
        if (acc.tipo_acc === '1'){
            return(
                <div>
                    <label htmlFor="">Descripción de categoria</label>
                    <select name="tipo_sub_acc" id="">

                    </select>
                </div>
            );
        }
    }*/

  return (
    <div>
        <div>
            <Header />
        </div>
        <div className='box-poliza'>
            <div className='form-poliza'>
                <h4>Registro de Siniestros</h4>
                <div className='formulario'>
                    <form onSubmit={handleSubmit} className='list'>
                        <div className='form-content'>
                            <label htmlFor="">Descripción</label>
                            <textarea name="descp_siniestro" onChange={handleSiniestro} id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Fecha de Accidente</label>
                            <input name="fecha_acc" onChange={handleAccidente} type="text" placeholder='AA-MM-DD...' />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Lugar Accidente</label>
                            <input name="lugar_acc" onChange={handleAccidente} type="text" />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Hora del Accidente</label>
                            <input name="hora_acc" onChange={handleAccidente} type="text" />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Tipo de Accidente</label>
                            <select name="descrip_cat" onChange={handleCategoria} id="">
                                <option value="?">Seleccionar</option>
                                <option value="Accidentes en el hogar">Accidentes en el hogar</option>
                                <option value="Accidentes en el trabajo">Accidentes en el trabajo</option>
                                <option value="Accidentes en la calle">Accidentes en la calle</option>
                                <option value="Accidentes en el campo">Accidentes en el campo</option>
                                <option value="Acicdentes en la infancia">Acicdentes en la infancia</option>
                                <option value="Accidentes en la escuela">Accidentes en la escuela</option>
                                <option value="Accidentes en hospitales">Accidentes en hospitales</option>
                                <option value="Accidentes por animales">Accidentes por animales</option>
                                <option value="Accidentes por desastres naturales">Accidentes por desastres naturales</option>
                            </select>
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Descripcion de Accidente</label>
                            <input name="descrip_subcateg" onChange={handleCategoria} type="text" />
                        </div>
                        <div className='form-content btn-poliza'>
                            <button type="submit"  className="button">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Siniestro
