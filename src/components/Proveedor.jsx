import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProveedores } from "../helpers/rutaProveedores";

// import Cargando from "../components/Cargando";
import "../css/principal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProveedorForm from "./AddProveedorForm";
// let busqueda = [];

const Proveedores = () => {
  const [proveedores, setProveedores] = useState({
    data: {},
    loading: true,
  });

  useEffect(() => {
    getProveedores().then((proveedores) => {
      setProveedores({
        data: proveedores,
        loading: false,
      });
    });
  }, []);

  return (
    <main>
      {/* <div>{propiedades.loading && <Cargando />}</div> */}
      {!proveedores.loading && (
        <div className="container">
          <div className="mb-4">
            <div className="col text-justify mt-5">
              <b>
                <h2>ALTA DE PROVEEDORES</h2>
              </b>
              <hr></hr>
            </div>
          </div>

          <div className="row ml-4">
            {proveedores.data.proveedores.map((proveedor) => {
              return (
                <>
                  <div id="card" className="col-lg-12 ml-5">
                    <Link
                      to={`/proveedor/${proveedor._id}`}
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
      <AddProveedorForm />
    </main>
  );
};

export default Proveedores;
