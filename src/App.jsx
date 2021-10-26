import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Propiedades from "./pages/Propiedades";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Layout from "./components/Layout";
// import Propiedad from "./pages/Propiedad";
import Login from "./pages/Login";
// import Admin from "./pages/Admin";
import Comandas from "./pages/Comandas";
import Clientes from "./pages/Clientes";
import Proveedores from "./pages/Proveedores";
import Localidades from "./pages/Localidades";
import Empresas from "./pages/Empresas";
import Producservs from "./pages/Producservs";
import Rutas from "./pages/Rutas";
import Rubros from "./pages/Rubros";
import Marcas from "./pages/Marcas";

import Quienes from "./pages/Quienes";
// import Eco from "./pages/Eco";

const App = () => {
  return (
    <>
      
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Comandas" component={Comandas} />
            <Route exact path="/Clientes" component={Clientes} />
            <Route exact path="/Proveedores" component={Proveedores} />
            <Route exact path="/Localidades" component={Localidades} />
            <Route exact path="/Empresas" component={Empresas} />
            <Route exact path="/Producservs" component={Producservs} />
            <Route exact path="/Rutas" component={Rutas} />
            <Route exact path="/Rubros" component={Rubros} />
            <Route exact path="/Marcas" component={Marcas} />
            <Route exact path="/quienes" component={Quienes} /> 
           
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;


{/* <Route exact path="/eco" component={Eco} />        */}
{/* <Route exact path="/admin" component={Admin} /> */}
{/* <Route component={Error404} />  */}
{/* <Route exact path="/propiedades" component={Propiedades} /> */}
{/* <Route exact path="/propiedades" component={Propiedades} /> */}
{/* <Route exact path="/propiedad/:id" component={Propiedad} /> */}
 