import React from "react";
import "../css/busqueda.css";
const Busqueda = ({
  // inputValue,
  // setInputValue,
  setEstadoSelect,
  setTipoSelect,
  setLugarSelect,
  setAmbientesSelect,
  setMuestrapagina,
  filtrarPropiedades,
}) => {
  // const handleChange = (e) => {
    
  // };
  const handleSubmit = (e) => {
    // El preventDefault evita que se recargue la pagina en el onSubmit.
    e.preventDefault();
    // <Link to="/propiedades" className="nav-link"></Link>
    setMuestrapagina(false);
    filtrarPropiedades();
  };
  return (
    <div className="busqueda">
      <div className="col-12">
        {/* <input
        type="text"
        className="form-control"
        placeholder="Busqueda..."
        // value={inputValue}
        // onChange={handleChange}
      /> */}
        <form class="form-inline">
          <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
            Estado
          </label>
          <select
            class="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            onChange={(e) => setEstadoSelect(e.target.value)}
          >
            <option selected value="">
              Elija la opción adecuada
            </option>
            <option>Venta</option>
            <option>Alquiler</option>
            <option>Venta-Alquiler</option>
            {/* <option value="">Ninguno de las anteriores</option> */}
          </select>
          <label class="ml-5 my-1 mr-2" for="inlineFormCustomSelectPref">
            Tipo
          </label>
          <select
            class="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            onChange={(e) => setTipoSelect(e.target.value)}
          >
            <option selected value="">
              Elija la opción adecuada
            </option>
            <option>Casa</option>
            <option>Departamento</option>
            <option>Terreno</option>
            <option>Local Comercial</option>
            <option>Galpón</option>
            <option>Cochera</option>
            <option>Oficina</option>
            <option>Campo</option>
            {/* <option value="">Ninguno de las anteriores</option> */}
          </select>
          <label class="ml-5 my-1 mr-2" for="inlineFormCustomSelectPref">
            Lugar
          </label>
          <select
            class="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            onChange={(e) => setLugarSelect(e.target.value)}
          >
            <option selected value="">
              Elija la opción adecuada
            </option>
            <option>San Miguel de Tucumán</option>
            <option>Yerba Buena</option>
            <option>Tafí del Valle</option>
            <option>Tafí Viejo</option>
            <option>Banda del Río Salí</option>
            <option>Concepción</option>
            <option>Monteros</option>
            <option>Famailla</option>
            <option>Lules</option>
            {/* <option value="">Ninguno de las anteriores</option> */}
          </select>
          <label class="ml-5 my-1 mr-2" for="inlineFormCustomSelectPref">
            Ambientes
          </label>
          <select
            class="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            onChange={(e) => setAmbientesSelect(e.target.value)}
          >
            <option selected value="">
              Elija la opción adecuada
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            {/* <option value="">Ninguno de las anteriores</option> */}
          </select>
          <button
            type="submit"
            class="btn btn-info ml-5 my-1 btn-lg"
            onClick={handleSubmit}
          >
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
};
export default Busqueda;