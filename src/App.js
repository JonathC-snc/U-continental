//import logo from './logo.svg';
import * as React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Principal from "./components/principal";
//import Automovil from "./components/automovil.jsx";
import Registro from "./components/registro";
import Portal from "./components/portal";
import Servicios from "./components/servicios";
import Serv from "./components/servicio";
import Error404 from "./components/error_404";
import Sesion from "./components/sesion";
import Siniestro from "./components/siniestro";
import Rsiniestro from "./components/Registro_siniestro"
import Cotizacion from "./components/cotizacion";
import Resultado from "./components/cotizacion_resultado";
import Contrato from "./components/contrato";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
          <Routes>
            <Route path="/" exact element={<Principal />}/>
            <Route path="/servicio/:id" element={<Servicios />} />
            <Route path="/servicio" element={<Serv />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/resulsiniestro" element={<Rsiniestro />} />
            <Route path="/siniestro/:id" element={<Siniestro />} />
            <Route path="/portal/:id" element={<Portal />} />
            <Route path="/sesion" element={<Sesion />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/contrato" element={<Contrato />} />
            <Route path="/cotizacion/:id" element={<Resultado />}/>
            <Route path="/cotizacion" element={<Cotizacion />} />
            <Route path="*" element={<Error404 />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
  
}

export default App;