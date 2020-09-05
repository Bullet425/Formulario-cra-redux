import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Formulario from "./formulario";
import useFormulario from "../../hooks/useFormulario";

configure({ adapter: new Adapter() });

describe("Formulario", () => {
  it("ejecuta onSubmit, preventDefault y nuevaCita", () => {
    const prevent = jest.fn();
    const nuevaCita = jest.fn();
    const cita = {
      cliente: "",
      mascota: "",
      fecha: "",
      hora: "",
      descripcion: "",
    };
    const wrapper = shallow(<Formulario nuevaCita={nuevaCita} />);

    wrapper.find("form").simulate("submit", { preventDefault: prevent });

    expect(prevent.mock.calls).toEqual([[]]);
    expect(nuevaCita.mock.calls).toEqual([[cita]]);
  });
});

/*describe("custom hook: useFormulario", () => {
  it("", () => {
    const Test = (props) => {
      const hook = props.hook();
      return <div {...hook} />;
    };

    const cita = {
      cliente: "Hola",
      mascota: "",
      fecha: "",
      hora: "",
      descripcion: "",
    };

    const wrapper = shallow(<Test hook={useFormulario} />);
    let props = wrapper.find("div").props();
    console.log(props);
    props.onChange(cita);
    props = wrapper.find("div").props();
    expect(props).toEqual(cita);
  });
});*/
