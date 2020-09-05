import React, { useEffect } from "react";
import "./citas.css";
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductosAction } from "../../actions/productoActions";

const Citas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const obtenerCitas = () => dispatch(obtenerProductosAction());
    obtenerCitas();
  }, []);

  const citas = useSelector((state) => state.citas.citas);

  return (
    <div className="citasContenedor">
      <h1 className="tituloCitas">Citas</h1>
      {citas.length === 0 ? (
        <p className="noCitas">No hay citas por el momento</p>
      ) : (
        citas.map((cita) => (
          <div key={cita.id} className="cardContenedor">
            <p>Nombre del Cliente: {cita.cliente}</p>
            <p>Nombre de la Mascota: {cita.mascota}</p>
            <p>Fecha: {cita.fecha}</p>
            <p>Hora: {cita.hora}</p>
            <button className="botonEliminarCita">Eliminar Cita</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Citas;
