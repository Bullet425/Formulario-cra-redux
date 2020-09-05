import React from "react";
import "./formulario.css";
import useFormulario from "../../hooks/useFormulario";

import { nuevaCitaAction } from "../../actions/productoActions";

import { useDispatch, useSelector } from "react-redux";

const Formulario = () => {
  const inputsIniciales = {
    cliente: "",
    mascota: "",
    fecha: "",
    hora: "",
    descripcion: "",
  };

  const { onChange, celda } = useFormulario(inputsIniciales);

  const dispatch = useDispatch();

  const agregarCita = (cita) => {
    dispatch(nuevaCitaAction(cita));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    agregarCita(celda);
  };

  return (
    <div className="contenedorFormulario">
      <h1 className="tituloFormulario">Crear Cita</h1>
      <form onSubmit={onSubmit}>
        <label className="labels">Nombre del Cliente</label>
        <input
          type="text"
          name="cliente"
          value={celda.cliente}
          onChange={onChange}
          className="inputFormulario"
        />
        <label className="labels">Nombre de la Mascota</label>
        <input
          type="text"
          name="mascota"
          onChange={onChange}
          value={celda.mascota}
          className="inputFormulario"
        />
        <label className="labels">Fecha</label>
        <input
          type="date"
          name="fecha"
          onChange={onChange}
          value={celda.fecha}
          className="inputFormulario"
        />
        <label className="labels">Hora</label>
        <input
          type="time"
          name="hora"
          onChange={onChange}
          value={celda.hora}
          className="inputFormulario"
        />
        <label className="labels">Descripción del problema:</label>
        <textarea
          className="textAreaFormulario"
          onChange={onChange}
          name="descripcion"
          value={celda.descripcion}
        />
        <button type="submit" className="botonCita">
          Crear Cita
        </button>
      </form>
    </div>
  );
};

export default Formulario;
