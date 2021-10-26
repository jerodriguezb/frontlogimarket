import React, { useState, useEffect } from "react";
import { addRuta } from "../helpers/rutaRutas";
import { getLocalidades } from "../helpers/rutaLocalidades";
import { getRutas } from "../helpers/rutaRutas";
import { getIva } from "../helpers/rutaIva";
import "../css/addclienteform.css";

const AddRutaForm = ({ setShow }) => {
  //const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    ruta: "",
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
    addRuta(formValues).then((resp) => {
      console.log(resp);
      setFormValues({
        ruta:"",
      });
      //   setShow(false);
    });
  };

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
      {!rutas.loading &&(
        <div className="container">
          {/* {localidades.data.localidades.map((localidad) => (
            <h3>{localidad.localidad}</h3>
          ))} */}

          <form  onSubmit={handleSubmit}>
          
            <div className="form-group">
              <label className="ml-5">Ruta</label>
              <input
                type="text"
                className="form-control ml-5"
                name="ruta"
                maxLength="20"
                required
                value={formValues.ruta}
                onChange={handleChange}
              />
              {console.log(formValues.ruta)}
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

export default AddRutaForm;


