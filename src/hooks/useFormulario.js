import { useState } from "react";

const useFormulario = (celdasIniciales) => {
  const [celda, setCelda] = useState(celdasIniciales);

  const onChange = (e) => {
    setCelda({
      ...celda,
      [e.target.name]: e.target.value,
    });
  };

  return {
    onChange,
    celda,
  };
};

export default useFormulario;
