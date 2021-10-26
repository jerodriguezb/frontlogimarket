import React from "react";
import AddClienteForm from "./AddClienteForm";

const AddCliente = ({ show, setShow }) => {
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="col-12">
        <button className="btn btn-outline-info" onClick={handleShow}>
          {show ? "Ocultar Form" : "Agregar Cliente"}
        </button>
      </div>
      {show && (
        <div className="col-md-8 offset-md-2 mb-3">
          <AddClienteForm setShow={setShow} />
        </div>
      )}
    </>
  );
};
export default AddCliente;
