import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { getCarousel } from "../helpers/rutaPropiedades";
import Footer from "../components/Footer";
import "../css/quienes.css";
import distripollo from '../images/distripollo.jpeg'
import "bootstrap/dist/css/bootstrap.min.css";


const Quienes = () => {
  // const [carousel, setCarousel] = useState({
  //   data: [],
  //   loading: true,
  // });

  // useEffect(() => {
  //   getCarousel().then((carousel) => {
  //     setCarousel({
  //       data: carousel,
  //       loading: false,
  //     });
  //   });
  // }, []);

  return (
    <div>
      <div className="row">
       
        <div className="col">
            <div className="overlay">
              <div className="container">
                <div className="row align-items-center">
                  <div id="cartel" className="col-md-12 text-center text-md-left">
                    <h1 className="mt-5 ml-5">DISTRI POLLO</h1>
                    <p className="d-none d-md-block mt-6 mb-5">
                      Somos una empresa dedicada a la venta y distribución 
                      de pollos y derivados. Hacemos envios a todo el interior 
                      sin costos de traslado. Operamos con mercadería fresca sin
                      congelar, sin conservantes, lo que hace que la calidad de 
                      nuestro productos sea la diferencia para nuestros clientes.
                      Eficiencia en la entrega puerta a puerta. Siempre imnovando, 
                      ahora con un nuevo desarrollo.Una APP de servicios de 
                      Pedido-Carga-Entrega de manera de mejorar y acelerar el 
                      proceso de entrega.
                      
                    </p>
                    <Link to="/propiedades">
                      <button type="button" className="btn btn-info ml-5 mt-4">
                        Arma el Pedido del Cliente
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="col">
          <img className="imagen"
              src={distripollo}
              className="d-block w-75"
              alt="site 1"
            />
        </div>
      </div>
      <Footer />
    </div>
  
  );

};

export default Quienes;