import React, { useEffect, useState } from "react";
import SectionFilters from "../SectionFilters";
import ContainerCollects from "../ContainerCollects";

import "./style.css";

const AllCollects = ({ icon, nome, collection }) => {
  const [filterCollects, setFilterCollects] = useState([]);
  const [filtroSelecionado, setFiltroSelecionado] = useState("");
  const [deletedItems, setDeletedItems] = useState([]);

  useEffect(() => {
    const storedDeletedItems = localStorage.getItem("deletedItems");
    if (storedDeletedItems) {
      setDeletedItems(JSON.parse(storedDeletedItems));
    }

    let filteredCollection = collection.filter(
      (item) => item.materia_prima === nome && !deletedItems.includes(item.id)
    );

    if (filtroSelecionado === "extrativista") {
      filteredCollection.sort((a, b) =>
        a.extrativista.localeCompare(b.extrativista)
      );
    } else if (filtroSelecionado === "data") {
      filteredCollection.sort(
        (a, b) => new Date(a.data_entrada) - new Date(b.data_entrada)
      );
    } else if (filtroSelecionado === "quantidade") {
      filteredCollection.sort((a, b) => a.quantidade - b.quantidade);
    } else if (filtroSelecionado === "preco") {
      filteredCollection.sort((a, b) => a.valor_pago - b.valor_pago);
    }

    setFilterCollects(filteredCollection);
  }, [collection, nome, filtroSelecionado, deletedItems]);

  const AlavancaBuscar = (filtro) => {
    setFiltroSelecionado(filtro);
  };

  const alavancaDeleteItem = (id) => {
    const updatedCollection = collection.filter((item) => item.id !== id);
    setDeletedItems([...deletedItems, id]);
    setFilterCollects(updatedCollection);

    localStorage.setItem("deletedItems", JSON.stringify([...deletedItems, id]));
  };

  return (
    <div className="AllCollects">
      <SectionFilters icon={icon} nome={nome} onBuscar={AlavancaBuscar} />
      <ContainerCollects
        collection={filterCollects}
        icon={icon}
        onDeleteItem={alavancaDeleteItem}
      />
    </div>
  );
};

export default AllCollects;
