import {
  NUEVA_CITA,
  NUEVA_CITA_EXITO,
  NUEVA_CITA_ERROR,
  OBTENER_CITAS,
  OBTENER_CITAS_EXITO,
  OBTENER_CITAS_ERROR,
} from "../types";

const initialState = {
  citas: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NUEVA_CITA:
      return {
        ...state,
        loading: true,
      };

    case NUEVA_CITA_EXITO:
      action.payload["id"] = state.citas.length + 1;
      return {
        ...state,
        loading: false,
        citas: [...state.citas, action.payload],
      };

    case OBTENER_CITAS:
      return {
        ...state,
        loading: true,
      };

    case OBTENER_CITAS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        citas: action.payload,
      };

    case NUEVA_CITA_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case OBTENER_CITAS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}
