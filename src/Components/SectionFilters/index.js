import React, { useState, useEffect } from "react";
import "./style.css";

const SectionFilters = ({ icon, nome, onBuscar }) => {
  const [filtroSelecionado, setFiltroSelecionado] = useState("");

  useEffect(() => {
    onBuscar(filtroSelecionado);
  }, [filtroSelecionado, onBuscar]);

  const selecionarFiltro = (event) => {
    setFiltroSelecionado(event.target.value);
  };

  const BuscarClick = () => {
    onBuscar(filtroSelecionado);
  };

  return (
    <div className="filtro">
      <div className="titulo-form">
        <div className="div-titulo">
          <img src={icon} alt={`Ícone de ${nome}`} />
          <h1>{nome}</h1>
        </div>

        <h2>Filtrar por:</h2>

        <form action="" className="form-filtro">
          <div>
            <input
              type="radio"
              name="filtro"
              value="extrativista" // Alterado para "alfabetica"
              onChange={selecionarFiltro}
              checked={filtroSelecionado === "extrativista"} // Alterado para "alfabetica"
            />
            <label>Ordem alfabética</label>
          </div>
          <div>
            <input
              type="radio"
              name="filtro"
              value="data"
              onChange={selecionarFiltro}
              checked={filtroSelecionado === "data"}
            />
            <label>Data</label>
          </div>
          <div>
            <input
              type="radio"
              name="filtro"
              value="quantidade"
              onChange={selecionarFiltro}
              checked={filtroSelecionado === "quantidade"}
            />
            <label>Quantidade Kg</label>
          </div>
          <div>
            <input
              type="radio"
              name="filtro"
              value="preco"
              onChange={selecionarFiltro}
              checked={filtroSelecionado === "preco"}
            />
            <label>Valor pago</label>
          </div>
        </form>

        <button onClick={BuscarClick}>Buscar</button>
      </div>

      <div className="buscas">
        <input type="text" />
      </div>
    </div>
  );
};

export default SectionFilters;
