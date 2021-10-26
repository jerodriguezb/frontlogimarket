import React, { useState, useEffect } from "react";
import { addRubro } from "../helpers/rutaRubros";
import { getLocalidades } from "../helpers/rutaLocalidades";
import { getRubros } from "../helpers/rutaRubros";
import { getIva } from "../helpers/rutaIva";
import "../css/addrubroform.css";

const AddRubroForm = ({ setShow }) => {
  //const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    codrubro: "",
    rubro: "",
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
    addRubro(formValues).then((resp) => {
      console.log(resp);
      setFormValues({
        codrubro: "",
        rubro: "",
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

    return (
    <>
      {!rubros.loading &&(
        <div className="container">
          {/* {localidades.data.localidades.map((localidad) => (
            <h3>{localidad.localidad}</h3>
          ))} */}

          <form  onSubmit={handleSubmit}>
          
          <div className="form-group">
              <label className="ml-5">Codigo Rubro</label>
              <input
                type="text"
                className="form-control ml-5"
                name="codrubro"
                maxLength="20"
                required
                value={formValues.codrubro}
                onChange={handleChange}
              />
              {console.log(formValues.codrubro)}
            </div>
            <div className="form-group">
              <label className="ml-5">Rubro</label>
              <input
                type="text"
                className="form-control ml-5"
                name="rubro"
                maxLength="30"
                required
                value={formValues.rubro}
                onChange={handleChange}
              />
              {console.log(formValues.rubro)}
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

export default AddRubroForm;


