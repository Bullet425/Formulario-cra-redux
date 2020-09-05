import React from "react";
import { Formulario, Citas } from "../index";
import "./appContainer.css";
import { useSelector, useDispatch } from "react-redux";

const AppContainer = () => {
  // const eliminarCita = (cita) => {
  //   const nuevoArreglo = [...citas];
  //   const index = nuevoArreglo.indexOf(cita);
  //   nuevoArreglo.splice(index, 1);
  //   setCitas(nuevoArreglo);
  // };

  return (
    <div className="contenedor">
      <h1 className="tituloPrincipal">Administrador de Citas</h1>
      <div className="subContenedor">
        <Formulario />
      </div>
      <div className="subContenedor">
        <Citas />
      </div>
    </div>
  );
};

export default AppContainer;
