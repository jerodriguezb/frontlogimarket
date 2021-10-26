import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getComandas } from "../helpers/rutaComandas";

// import Cargando from "../components/Cargando";
import "../css/principal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddComandaForm from "./AddComandaForm";
// let busqueda = [];

const Comandas = () => {
  const [comandas, setComandas] = useState({
    data: {},
    loading: true,
  });

  useEffect(() => {
    getComandas().then((comandas) => {
      setComandas({
        data: comandas,
        loading: false,
      });
    });
  }, []);

  return (
    <main>
      {/* <div>{propiedades.loading && <Cargando />}</div> */}
      {!comandas.loading && (
        <div className="container">
          <div className="mb-4">
            <div className="col text-justify mt-5">
              <b>
                <h2>CARGAR COMANDA</h2>
                <h4>LA MISMA SE GUARDA CON FECHA {Date.now()} </h4>
              </b>
              <hr></hr>
            </div>
          </div>

          <div className="row ml-4">
            {comandas.data.comandas.map((comanda) => {
              return (
                <>
                  <div id="card" className="col-lg-12 ml-5">
                    <Link
                      to={`/comanda/${comanda._id}`}
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
      <AddComandaForm />
    </main>
  );
};

export default Comandas;
