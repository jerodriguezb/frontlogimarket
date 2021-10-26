import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getClientes } from "../helpers/rutaClientes";

// import Cargando from "../components/Cargando";
import "../css/principal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddClienteForm from "./AddClienteForm";
// let busqueda = [];

const Clientes = () => {
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

  return (
    <main>
      {/* <div>{propiedades.loading && <Cargando />}</div> */}
      {!clientes.loading && (
        <div className="container">
          <div className="mb-4">
            <div className="col text-justify mt-5">
              <b>
                <h2>ALTA DE CLIENTE</h2>
              </b>
              <hr></hr>
            </div>
          </div>

          <div className="row ml-4">
            {clientes.data.clientes.map((cliente) => {
              return (
                <>
                  <div id="card" className="col-lg-12 ml-5">
                    <Link
                      to={`/cliente/${cliente._id}`}
                      className="text-decoration-none"
                    >
                      {/* <div className="card ml-4 mb-4">
                        <div className="card-body">
                          <h3 className="card-title">{empresa.razonsocial}</h3>
                          <h4 className="card-title">
                            {empresa.localidad.provincia.provincia}
                          </h4>
                          <h5 className="card-title">
                            {empresa.condicioniva.iva}
                          </h5>
                        </div>
                      </div> */}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
      <AddClienteForm />
    </main>
  );
};

export default Clientes;
