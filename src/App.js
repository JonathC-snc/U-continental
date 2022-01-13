import logo from './logo.svg';
import * as React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Principal from "./components/principal";
import Automovil from "./components/automovil.jsx";
import Registro from "./components/cotizacion";
import Portal from "./components/portal";
// import Menu from "./components/menu";
import Sesion from "./components/sesion";
import Cotizacion from "./components/cotizacion";
import Poliza from "./components/poliza";

function App() {
  return (
    <BrowserRouter>
      <div className='="App'>
          <Routes>
            <Route path="/" exact element={<Principal />}/>
            <Route path="/automovil" element={<Automovil />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/portal" element={<Portal />} />
            {/* <Route path="/menu" element={<Menu />} /> */}
            <Route path="/sesion" element={<Sesion />} />
            <Route path="/cotizacion" element={<Cotizacion />} />
            <Route path="/poliza" element={<Poliza />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
  
}

export default App;