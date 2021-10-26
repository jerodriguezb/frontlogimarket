import React from "react";
import AddComandaForm from "./AddComandaForm";

const AddComanda = ({ show, setShow }) => {
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="col-12">
        <button className="btn btn-outline-info" onClick={handleShow}>
          {show ? "Ocultar Form" : "Agregar Comanda"}
        </button>
      </div>
      {show && (
        <div className="col-md-8 offset-md-2 mb-3">
          <AddComandaForm setShow={setShow} />
        </div>
      )}
    </>
  );
};
export default AddComanda;
