import React, { useState, useEffect } from "react";
import { addCliente } from "../helpers/rutaClientes";
import { getLocalidades } from "../helpers/rutaLocalidades";
import { getRutas } from "../helpers/rutaRutas";
import { getIva } from "../helpers/rutaIva";
import "../css/addclienteform.css";

const AddClienteForm = ({ setShow }) => {
  //const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    codcli: "",
    razonsocial: "",
    domicilio: "",
    telefono: "",
    cuit: "",
    email: "",
    localidad: "",
    condicioniva: "",
    ruta:"",

    // usuario: id,
  });
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addCliente(formValues).then((resp) => {
      console.log(resp);
      setFormValues({
        codcli:"",
        razonsocial: "",
        domicilio: "",
        telefono: "",
        cuit: "",
        email: "",
        localidad: "",
        condicioniva: "",
        ruta:"",
      });
      //   setShow(false);
    });
  };

  const [localidades, setLocalidades] = useState({
    data: {},
    loading: true,
  });
  useEffect(() => {
    getLocalidades().then((localidades) => {
      setLocalidades({
        data: localidades,
        loading: false,
      });
    });
  }, []);

  const [iva, setIva] = useState({
    data: {},
    loading: true,
  });
  useEffect(() => {
    getIva().then((iva) => {
      setIva({
        data: iva,
        loading: false,
      });
    });
  }, []);

  const [rutas, setRutas] = useState({
    data: {},
    loading: true,
  });
  useEffect(() => {
    getRutas().then((rutas) => {
      setRutas({
        data: rutas,
        loading: false,
      });
    });
  }, []);

  return (
    <>
      {!localidades.loading && !iva.loading && !rutas.loading &&(
        <div className="container">
          {/* {localidades.data.localidades.map((localidad) => (
            <h3>{localidad.localidad}</h3>
          ))} */}

          <form  onSubmit={handleSubmit}>
          
            <div className="form-group">
              <label className="ml-5">Codigo Cliente</label>
              <input
                type="text"
                className="form-control ml-5"
                name="codcli"
                maxLength="20"
                required
                value={formValues.codcli}
                onChange={handleChange}
              />
              {console.log(formValues.codcli)}
            </div>

            <div className="form-group">
              <label className="ml-5">Razon Social</label>
              <input
                type="text"
                className="form-control ml-5"
                name="razonsocial"
                maxLength="20"
                required
                value={formValues.razonsocial}
                onChange={handleChange}
              />
              {console.log(formValues.razonsocial)}
            </div>

            <div className="form-group">
              <label className="ml-5">Domicilio</label>
              <input
                type="text"
                className="form-control ml-5"
                name="domicilio"
                maxLength="20"
                required
                value={formValues.domicilio}
                onChange={handleChange}
              />
              {console.log(formValues.domicilio)}
            </div>

            <div className="form-group">
              <label className="ml-5">Telefono</label>
              <input
                type="text"
                className="form-control ml-5"
                name="telefono"
                maxLength="20"
                required
                value={formValues.telefono}
                onChange={handleChange}
              />
              {console.log(formValues.telefono)}
            </div>

            <div className="form-group">
              <label className="ml-5">CUIT</label>
              <input
                type="text"
                className="form-control ml-5"
                name="cuit"
                maxLength="20"
                required
                value={formValues.cuit}
                onChange={handleChange}
              />
              {console.log(formValues.cuit)}
            </div>

            <div className="form-group">
              <label className="ml-5">Email</label>
              <input
                type="text"
                className="form-control ml-5"
                name="email"
                maxLength="20"
                required
                value={formValues.email}
                onChange={handleChange}
              />
              {console.log(formValues.email)}
            </div>

            <div className="form-group">
              <label className="ml-5">Localidad</label>
              <select
                className="form-control ml-5"
                name="localidad"
                value={formValues.localidad}
                onChange={handleChange}
                required
              >
                <option selected value="">
                  Elija la opción adecuada
                </option>
                {localidades.data.localidades.map((localidad) => (
                  <option value={localidad._id}>{localidad.localidad}</option>
                ))}
              </select>
            </div>
            
            {/* <div className="form-group">
              <label className="ml-5">Localidad</label>
              <input
                type="text"
                className="form-control ml-5"
                name="localidad"
                required
                value={formValues.localidad}
                onChange={handleChange}
              />
            </div> */}

            {/* <div className="form-group">
              <label className="ml-5">Condicion de IVA</label>
              <select
                className="form-control ml-5"
                name="localidad"
                value={formValues.condicioniva}
                onChange={handleChange}
                required
              >
                <option selected value="">
                  Elija la opción adecuada
                </option>
                {localidades.data.iva.map((iva) => (
                  <option value={iva._id}>{iva.condicioniva}</option>
                ))}
              </select>
            </div> */}

            <div className="form-group">
              <label className="ml-5">Condicion de IVA</label>
              <select
                className="form-control ml-5"
                name="condicioniva"
                value={formValues.condidicioniva}
                onChange={handleChange}
                required
              >
                <option selected value="">
                  Elija la opción adecuada
                </option>
                {iva.data.iva.map((iva) => (
                  <option value={iva._id}>{iva.iva}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="ml-5">Ruta</label>
              <select
                className="form-control ml-5"
                name="ruta"
                value={formValues.ruta}
                onChange={handleChange}
                required
              >
                <option selected value="">
                  Elija la opción adecuada
                </option>
                {rutas.data.rutas.map((ruta) => (
                  <option value={ruta._id}>{ruta.ruta}</option>
                ))}
              </select>
            </div>
            

            <div>
              <button type="submit" className="btn btn-outline-info ml-5 mt-5 mb-5">
                Guardar
              </button>
            </div>
          </form>
        </div>
      )}
      ;
    </>
  );
};

export default AddClienteForm;

{
  /* <div className="form-group">
        <label>Estado Propiedad</label>
        <select
          className="form-control"
          name="EstadoPropiedad"
          value={formValues.EstadoPropiedad}
          onChange={handleChange}
          required>
          <option selected value="">Elija la opción adecuada</option>
          <option value="Venta">Venta</option>
          <option value="Alquiler">Alquiler</option>
          <option value="Venta-Alquiler">Venta-Alquiler</option>
        </select>
      </div> */
}
