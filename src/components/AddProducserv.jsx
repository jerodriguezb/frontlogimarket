import React from "react";
import AddProducservForm from "./AddProducservForm";

const AddProducserv = ({ show, setShow }) => {
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="col-12">
        <button className="btn btn-outline-info" onClick={handleShow}>
          {show ? "Ocultar Form" : "Agregar Productos y Servicios"}
        </button>
      </div>
      {show && (
        <div className="col-md-8 offset-md-2 mb-3">
          <AddProducservForm setShow={setShow} />
        </div>
      )}
    </>
  );
};
export default AddProducserv;
