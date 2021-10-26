import React, { useState, useEffect } from "react";
import { addMarca } from "../helpers/rutaMarcas";
import { getLocalidades } from "../helpers/rutaLocalidades";
import { getMarcas } from "../helpers/rutaMarcas";
import { getIva } from "../helpers/rutaIva";
import "../css/addclienteform.css";

const AddMarcaForm = ({ setShow }) => {
  //const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    codmarca: "",
    marca: "",
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
    addMarca(formValues).then((resp) => {
      console.log(resp);
      setFormValues({
        codmarca: "",
        marca:"",
      });
      //   setShow(false);
    });
  };

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

    return (
    <>
      {!marcas.loading &&(
        <div className="container">
          {/* {localidades.data.localidades.map((localidad) => (
            <h3>{localidad.localidad}</h3>
          ))} */}

          <form  onSubmit={handleSubmit}>
          
          <div className="form-group">
              <label className="ml-5">Codigo Marca</label>
              <input
                type="text"
                className="form-control ml-5"
                name="codmarca"
                maxLength="20"
                required
                value={formValues.codmarca}
                onChange={handleChange}
              />
              {console.log(formValues.codmarca)}
            </div>
            <div className="form-group">
              <label className="ml-5">Marca</label>
              <input
                type="text"
                className="form-control ml-5"
                name="marca"
                maxLength="30"
                required
                value={formValues.marca}
                onChange={handleChange}
              />
              {console.log(formValues.marca)}
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

export default AddMarcaForm;


