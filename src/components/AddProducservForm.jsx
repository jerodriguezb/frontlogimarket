import React, { useState, useEffect } from "react";
import { addCliente } from "../helpers/rutaClientes";
import { addProducserv} from "../helpers/rutaProducservs";
import { getRubros } from "../helpers/rutaRubros";
import { getMarcas } from "../helpers/rutaMarcas";
import { getUnidades } from "../helpers/rutaUnidades";
import { getLocalidades } from "../helpers/rutaLocalidades";
import { getRutas } from "../helpers/rutaRutas";
import { getIva } from "../helpers/rutaIva";
import "../css/addclienteform.css";

const AddProducservForm = ({ setShow }) => {
  //const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    codprod: "",
    descripcion: "",
    rubro: "",
    marca: "",
    unidaddemedida: "",
    tipo: "",
    iva: "",
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
    addProducserv(formValues).then((resp) => {
      console.log(resp);
      setFormValues({
        codprod: "",
        descripcion: "",
        rubro: "",
        marca: "",
        unidaddemedida: "",
        tipo: "",
        iva: "",
      });
      //   setShow(false);
    });
  };

  const [rubros, setRubros] = useState({
    data: {},
    loading: true,
  });
  useEffect(() => {
    getRubros().then((rubros) => {
      setRubros({
        data: rubros,
        loading: false,
      });
    });
  }, []);

  const [marcas, setMarcas] = useState({
    data: {},
    loading: true,
  });
  useEffect(() => {
    getMarcas().then((marcas) => {
      setMarcas({
        data: marcas,
        loading: false,
      });
    });
  }, []);

  const [unidades, setUnidades] = useState({
    data: {},
    loading: true,
  });
  useEffect(() => {
    getUnidades().then((unidades) => {
      setUnidades({
        data: unidades,
        loading: false,
      });
    });
  }, []);

  return (
    <>
      {!rubros.loading && !marcas.loading && !unidades.loading &&(
        <div className="container">
          {/* {localidades.data.localidades.map((localidad) => (
            <h3>{localidad.localidad}</h3>
          ))} */}

          <form  onSubmit={handleSubmit}>
          
            <div className="form-group">
              <label className="ml-5">Codigo Producto/Servicio</label>
              <input
                type="text"
                className="form-control ml-5"
                name="codprod"
                maxLength="20"
                required
                value={formValues.codprod}
                onChange={handleChange}
              />
              {console.log(formValues.codprod)}
            </div>

            <div className="form-group">
              <label className="ml-5">Descripcion</label>
              <input
                type="text"
                className="form-control ml-5"
                name="descripcion"
                maxLength="50"
                required
                value={formValues.descripcion}
                onChange={handleChange}
              />
              {console.log(formValues.descripcion)}
            </div>
       
            <div className="form-group">
              <label className="ml-5">Rubros</label>
              <select
                className="form-control ml-5"
                name="rubro"
                value={formValues.rubro}
                onChange={handleChange}
                required
              >
                <option selected value="">
                  Elija la opción adecuada
                </option>
                {rubros.data.rubros.map((rubro) => (
                  <option value={rubro._id}>{rubro.rubro}</option>
                ))}
              </select>
              {console.log(formValues.rubro._id)}
            </div>
            
            <div className="form-group">
              <label className="ml-5">Marcas</label>
              <select
                className="form-control ml-5"
                name="marca"
                value={formValues.marca}
                onChange={handleChange}
                required
              >
                <option selected value="">
                  Elija la opción adecuada
                </option>
                {marcas.data.marcas.map((marca) => (
                  <option value={marca._id}>{marca.marca}</option>
                ))}
              </select>
              {console.log(formValues.marca._id)}
            </div>

            <div className="form-group">
              <label className="ml-5">Unidad de Medida</label>
              <select
                className="form-control ml-5"
                name="unidaddemedida"
                value={formValues.unidaddemedida}
                onChange={handleChange}
                required
              >
                <option selected value="">
                  Elija la opción adecuada
                </option>
                {unidades.data.unidades.map((unidaddemedida) => (
                  <option value={unidaddemedida._id}>{unidaddemedida.unidaddemedida}</option>
                ))}
              </select>
              {console.log(formValues.unidaddemedida._id)}
            </div>

            <div className="form-group">
              <label className="ml-5">Tipo</label>
              <select
                className="form-control ml-5"
                name="tipo"
                value={formValues.tipo}
                onChange={handleChange}
                required
              >
                <option selected value="">
                  Elija la opción adecuada
                </option>
                <option>PRODUCTO</option>
                <option>SERVICIO</option>
              </select>
            </div>

            <div className="form-group">
              <label className="ml-5">Iva</label>
              <select
                className="form-control ml-5"
                name="iva"
                value={formValues.iva}
                onChange={handleChange}
                // required
              >
                <option selected value="">
                  Elija la opción adecuada
                </option>
                <option>10.5</option>
                <option>21</option>
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

export default AddProducservForm;
