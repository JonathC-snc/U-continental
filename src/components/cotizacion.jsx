import React from 'react';
import { useState } from 'react';
import Header from './header2';
import Footer from './footer';
import Formveh from './form_vehiculo';
import Formvid from './form_vida';
import Formhog from './form_hogar';
import Cliente from './cliente';
//import Error_404 from './error_404';
import banner from '../assets/img/cotizacion_images.gif';
import { Link } from 'react-router-dom';

const Cotizacion = () => {

    const [perso, setPerso] = useState({
        ci: "",
        nombre_persona: "",
        num_tlf_pers: "",
        tipo_persona: "",
    });
    
    /*const [tpoli, setTipo] = useState({
        tipo_poliza: "",
    });
    
    const [tperso, setTipoper] = useState({
        tipo_persona: "",
    })*/

    const [veh, setVeh] = useState({
        matricula: "",
        modelo: "",
        annio: "",
        id_tipo_categoria: "",
        id_tipo_cobertura: "",
        marca: "",
    });

    const [hog, setHog] = useState({
        direc_inmueble: "",
        valor: "",
        contenido: "",
        riesgo_aux: "",
    });

    const [vid, setVid] = useState({
        prima: "",
        cobertura: "",
    });

    const [poli, setPoli] = useState({
        descrip_poliza: "",
        prima: "",
        tipo: "",
    });

    const [cliente, setCliente] = useState({
        apellido_cliente: "",
        direc_cliente: "",
        calle: "",
        id_ciudad: "",
        genero: "",
        fecha_nac: "",
        profesion: "", 
        id_sucursal: 1,
    });

    const handleClient = (e) => {
        setCliente({...cliente, [e.target.name]: e.currentTarget.value});
    }

    const handlePoli = (e) => {
        setPoli({...poli, [e.target.name]: e.currentTarget.value});
    }

    /*const handlePersona = (e) =>{
        
        setTipoper({...tperso, [e.target.name]: e.currentTarget.value}); 
    }*/

    const handlePerson = (e) => {
        
        setPerso({...perso, [e.target.name]: e.currentTarget.value});
    }

    /*const handlePoliza = (e) => {
        
        setTipo({...tpoli, [e.target.name]: e.currentTarget.value});
    }*/

    const handleVehiculo = (e) => 
        setVeh({...veh, [e.target.name]: e.currentTarget.value});

    const handleHogar = (e) =>
        setHog({...hog, [e.target.name]: e.currentTarget.value});
        
    const handleVida = (e) =>
        setVid({...vid, [e.target.name]: e.currentTarget.value});    

    let component = <br />;
    let comp = <br />;

    if (perso.tipo_persona === '4'){
        comp = <Cliente handleClient={handleClient}/>
    }else{
        comp = <br />;
    }

    if (poli.tipo === '3'){
        component = <Formveh handleVehiculo={handleVehiculo}/>
    }else{
        if(poli.tipo === '1'){
            component = <Formvid handleVida={handleVida}/>
        }else{
            if(poli.tipo === '2'){
                component = <Formhog handleHogar={handleHogar}/>
            }
        }
    }

    const bandera = async function(e) {
        if (poli.tipo === '3'){
            const vehi = await fetch("http://localhost:5000/post-crearauto", {
                method: "POST",
                body: JSON.stringify(veh),
                headers: { "Content-Type": "application/json"}
            });
            const auto = await vehi.json();
        }else{
            if(poli.tipo === '1'){
                const vida = await fetch("http://localhost:5000/post-crearvida", {
                    method: "POST",
                    body: JSON.stringify(vid),
                    headers: { "Content-Type": "application/json"}
                });
                const life = await vida.json();
            }else{
                if(poli.tipo === '2'){
                    const hoga = await fetch("http://localhost:5000/post-crearinmueble", {
                        method: "POST",
                        body: JSON.stringify(hog),
                        headers: { "Content-Type": "application/json"}
                    });
                    const hou = await hoga.json();
                }
            }
        }
    }

    const handleSubmit = async function(e){
        e.preventDefault();
        console.log(cliente);
        const res = await fetch("http://localhost:5000/post-crearpersona", {
            method: "POST",
            body: JSON.stringify(perso),
            headers: { "Content-Type": "application/json"}

        });

        const pol = await fetch("http://localhost:5000/post-Poliza", {
            method: "POST",
            body: JSON.stringify(poli),
            headers: { "Content-Type": "application/json"}
        });

        if (perso.tipo_persona === '4'){
            const cli = await fetch("http://localhost:5000/post-crearCliente", {
                method: "POST",
                body: JSON.stringify(cliente),
                headers: { "Content-Type": "application/json"}
            });
            const clie = await cli.json();
        }

        const vehi = await fetch("http://localhost:5000/post-crearauto", {
            method: "POST",
            body: JSON.stringify(veh),
            headers: { "Content-Type": "application/json"}
        });
        const auto = await vehi.json();


            const vida = await fetch("http://localhost:5000/post-crearvida", {
                method: "POST",
                body: JSON.stringify(vid),
                headers: { "Content-Type": "application/json"}
            });
            const life = await vida.json();
        
            const hoga = await fetch("http://localhost:5000/post-crearinmueble", {
                method: "POST",
                body: JSON.stringify(hog),
                headers: { "Content-Type": "application/json"}
            });
            const hou = await hoga.json();
        

        const data = await res.json();
        const poliza = await pol.json();
        console.log(perso);
        console.log(veh);
        console.log(vid);
        console.log(hog);
    }
        return (
                    <div>
                        <div>
                            <Header />
                        </div>
                        <div className='box-poliza'>
                            <div className='banner-poliza'>
                                <img src={banner} alt="" />
                            </div>
                            <div className='form-poliza'>
                                <h4>Cotizacion de poliza</h4>
                                <div className='formulario'>
                                    <form action="" className='list'>
                                        <div className='form-content'>
                                            <label htmlFor="">Cedula</label>
                                            <input name="ci" onChange={handlePerson} type="text" placeholder='Cedula' />
                                        </div>
                                        <div className='form-content'>
                                            <label htmlFor="">Nombre</label>
                                            <input name="nombre_persona" onChange={handlePerson} type="text" placeholder='Nombre' />
                                        </div>
                                        <div className='form-content'>
                                            <label htmlFor="">Numero Telefono</label>
                                            <input name="num_tlf_pers" onChange={handlePerson} type="text" placeholder='Telefono' />
                                        </div>
                                        <div className='form-content'>
                                            <label htmlFor="">Tipo Persona</label>
                                            <select name="tipo_persona" onChange={handlePerson} id="">
                                                <option value="?">Seleccionar</option>
                                                <option value="1">Beneficiario</option>
                                                <option value="4">Cliente</option>
                                            </select>
                                        </div>
                                        <div className='box-formveh'>
                                            {comp}
                                        </div>
                                        <div className='form-content'>
                                            <label htmlFor="">Descripcion de poliza</label>
                                            <textarea name="descrip_poliza" onChange={handlePoli} id="" cols="20" rows="5"></textarea>
                                        </div>
                                        <div className='form-content'>
                                            <label htmlFor="">Prima Solicitada</label>
                                            <input name="prima" onChange={handlePoli} type="text" />
                                        </div>
                                        <div className='form-content'>
                                            <label htmlFor="">Tipo de Poliza</label>
                                            <select  name="tipo" id="" onChange={handlePoli}>
                                                <option value="?">Seleccionar</option>
                                                <option value="1">Vida</option>
                                                <option value="2">Hogar</option>
                                                <option value="3">Vehiculo</option>
                                            </select>
                                        </div>
                                        <div className='box-formveh'>
                                            {component}
                                        </div>
                                        <div className='form-content btn-poliza'>
                                            <Link  to={"/cotizacion/1"}>
                                                <button type='submit' onClick={handleSubmit} className='button'>Enviar</button>
                                            </Link> 
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

export default Cotizacion