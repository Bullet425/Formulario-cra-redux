import {
  OBTENER_CITAS,
  OBTENER_CITAS_EXITO,
  OBTENER_CITAS_ERROR,
  NUEVA_CITA,
  NUEVA_CITA_EXITO,
  NUEVA_CITA_ERROR,
} from "../types";

import clienteAxios from "../config/axios";

export function nuevaCitaAction(cita) {
  return async (dispatch) => {
    dispatch(agregarCita());
    try {
      await clienteAxios.post("/citas", cita);
      dispatch(agregarCitaExito(cita));
    } catch (error) {
      dispatch(agregarCitaError());
      console.log(error);
    }
  };
}

const agregarCita = () => ({
  type: NUEVA_CITA,
});

const agregarCitaExito = (cita) => ({
  type: NUEVA_CITA_EXITO,
  payload: cita,
});

const agregarCitaError = () => ({
  type: NUEVA_CITA_ERROR,
});

export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());
    try {
      const respuesta = await clienteAxios.get("/citas");
      dispatch(obtenerCitasExito(respuesta.data));
    } catch (error) {
      dispatch(obtenerCitasError());
    }
  };
}

const descargarProductos = () => ({
  type: OBTENER_CITAS,
  pyaload: true,
});

const obtenerCitasExito = (citas) => ({
  type: OBTENER_CITAS_EXITO,
  payload: citas,
});

const obtenerCitasError = () => ({
  type: OBTENER_CITAS_ERROR,
});
