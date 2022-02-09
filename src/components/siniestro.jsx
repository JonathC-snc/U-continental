import React from 'react';
import Header from './header2';
import Footer from './footer';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const Siniestro = () => {

    const navigate = useNavigate();

    const params = useParams();

    const [poli, setPoli] = useState ([]);

    const [poliza, setPoliza] = useState ({
        nro_poliza: poli,
    })

    const [sini, setSini] = useState ({
        descp_siniestro: "",
    });

    const [rsini, setRsini] = useState ({
        nro_siniestro: 2,
        nro_poliza: "",
        fecha_siniestro: "",
        fecha_resp: "2022-02-11",
        rechazo: "NO",
        monto_reconocido: 5000,
        monto_solicitado: "",

    })

    const [acc, setAcc] = useState ({
        fecha_acc: "",
        lugar_acc: "",
        hora_acc: "",
    });

    const [cat, setCat] = useState ({
        descrip_cat: "",
        descrip_subcateg: "",
    })

    
    const handleRsiniestro = async (e) => {
        setRsini({...rsini, [e.target.name]: e.currentTarget.value});
        
    }
    
/*    const handlePoliza =  (e) => {
        setPoliza({...poliza, [e.target.name]: e.currentTarget.value});
    }*/
    
    /*const handleAccidente = (e) => {
        setAcc({...acc, [e.target.name]: e.currentTarget.value});
    }*/
    
    const handleSiniestro = (e) => {
        setSini({...sini, [e.target.name]: e.currentTarget.value});
        
    }
    
    /*const handleCategoria = (e) => {
        setCat({...cat, [e.target.name]: e.currentTarget.value});
    }*/



    
    
    
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        console.log(rsini.nro_poliza);
        const res = await fetch(`http://localhost:5000/poliza/${rsini.nro_poliza}`);
        const data = await res.json();
        const poliz = data[0].nro_poliza;
        console.log(poliz);
        console.log(data);
        if (poliz === rsini.nro_poliza){
            await fetch('http://localhost:5000/post-crearSiniestro', {
                method: "POST",
                body: JSON.stringify(sini),
                headers: { "Content-Type": "application/json"},   
                });

            await fetch('http://localhost:5000/post-registrarSiniestro', {
                method: "POST",
                body: JSON.stringify(rsini),
                headers: { "Content-Type": "aplication/json"},
            }) 
            alert('Registro añadido exitosamente')   
            navigate('/psiniestro')
        }else{
            alert('Error')
        }

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
                            <label htmlFor="">Nro de poliza</label>
                            <input type="text" name='nro_poliza' onChange={handleRsiniestro}/>
                            
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Descripción</label>
                            <textarea name="descp_siniestro" onChange={handleSiniestro} id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Fecha del Siniestro</label>
                            <input type="text" name='fecha_siniestro' onChange={handleRsiniestro} />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="">Monto Solicitado</label>
                            <input type="text" name='monto_solicitado' onChange={handleRsiniestro}/>
                        </div>
                        {/*<div className='form-content'>
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
  </div>*/}
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
