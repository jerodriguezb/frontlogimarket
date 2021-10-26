import React, { useState, useEffect } from "react";
import { addCliente } from "../helpers/rutaClientes";
import { addComanda } from "../helpers/rutaComandas";

import { getComandas } from "../helpers/rutaComandas";
import { getClientes } from "../helpers/rutaClientes";
import { getProducservs } from "../helpers/rutaProducservs";
import { getListas } from "../helpers/rutaListas";

import "../css/addcomandaform.css";

const AddComandaForm = ({ setShow }) => {
  //const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    nrodecomanda: "",
    codcli: "",
    lista: "",
    codprod: "",
    cantidad: "",
    monto: "",
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
    addComanda(formValues).then((resp) => {
      console.log(resp);
      setFormValues({
        nrodecomanda: "",
        codcli: "",
        lista: "",
        codprod: "",
        cantidad: "",
        monto: "",
      });
      //   setShow(false);
    });
  };

  const [clientes, setClientes] = useState({
    data: {},
    loading: true,
  });
  useEffect(() => {
    getClientes().then((clientes) => {
      setClientes({
        data: clientes,
        loading: false,
      });
    });
  }, []);

  const [listas, setListas] = useState({
    data: {},
    loading: true,
  });
  useEffect(() => {
    getListas().then((listas) => {
      setListas({
        data: listas,
        loading: false,
      });
    });
  }, []);

  const [producservs, setProducservs] = useState({
    data: {},
    loading: true,
  });
  useEffect(() => {
    getProducservs().then((producservs) => {
      setProducservs({
        data: producservs,
        loading: false,
      });
    });
  }, []);

  return (
    <>
      {!clientes.loading && !listas.loading && !producservs.loading &&(
        <div className="container">
          {/* {localidades.data.localidades.map((localidad) => (
            <h3>{localidad.localidad}</h3>
          ))} */}

          <form  onSubmit={handleSubmit}>
          
            <div className="form-group">
              <label className="ml-5">Nro de Comanda</label>
              <input
                type="text"
                className="form-control ml-5"
                name="nrodecomanda"
                maxLength="20"
                required
                value={formValues.nrodecomanda}
                onChange={handleChange}
              />
              {console.log(formValues.nrodecomanda)}
            </div>

            <div className="form-group">
              <label className="ml-5">Cliente</label>
              <select
                className="form-control ml-5"
                name="codcli"
                value={formValues.codcli}
                onChange={handleChange}
                required
              >
                <option selected value="">
                  Elija la opción adecuada
                </option>
                {clientes.data.clientes.map((cliente) => (
                  <option value={cliente._id}>{cliente.razonsocial}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="ml-5">Lista</label>
              <select
                className="form-control ml-5"
                name="lista"
                value={formValues.lista}
                onChange={handleChange}
                required
              >
                <option selected value="">
                  Elija la opción adecuada
                </option>
                {listas.data.listas.map((lista) => (
                  <option value={lista._id}>{lista.lista}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="ml-5">Producto</label>
              <select
                className="form-control ml-5"
                name="codprod"
                value={formValues.codprod}
                onChange={handleChange}
                required
              >
                <option selected value="">
                  Elija la opción adecuada
                </option>
                {producservs.data.producservs.map((producserv) => (
                  <option value={producserv._id}>{producserv.descripcion}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="ml-5">Cantidad</label>
              <input
                type="text"
                className="form-control ml-5"
                name="cantidad"
                maxLength="20"
                required
                value={formValues.cantidad}
                onChange={handleChange}
              />
              {console.log(formValues.cantidad)}
            </div>

            <div className="form-group">
              <label className="ml-5">Monto</label>
              <input
                type="text"
                className="form-control ml-5"
                name="monto"
                maxLength="20"
                required
                value={formValues.monto}
                onChange={handleChange}
              />
              {console.log(formValues.monto)}
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

export default AddComandaForm;

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
