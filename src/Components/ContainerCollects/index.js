import React, { useState } from "react";
import { formatarData, formatarReais } from "../../js/valueFormatter";
import ButtonsOptions from "../ButtonsOptions";
import DeleteConfirmationModal from "../DeleteConfirmationModal";
import EditModal from "../EditModal"; // Importe o componente do modal de edição

import styles from "./ContainerCollects.module.css";

const ContainerCollects = ({ collection, icon, onDeleteItem }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para controlar a abertura do modal de edição
  const [editedItem, setEditedItem] = useState(null); // Estado para armazenar o item sendo editado

  const handleDelete = (id) => {
    setSelectedItem(id);
  };

  const handleCancelDelete = () => {
    setSelectedItem(null);
  };

  const handleConfirmDelete = () => {
    if (selectedItem) {
      onDeleteItem(selectedItem);
      setSelectedItem(null);
    }
  };

  const handleEdit = (item) => {
    setEditedItem(item); // Define o item sendo editado
    setIsEditModalOpen(true); // Abre o modal de edição
  };

  return (
    <div className={styles.containerColeta}>
      {collection.map((item) => (
        <div key={item.id} className={styles.coleta}>
          <img id={styles.imagem} src={icon} alt={item.materia_prima} />
          <p id={styles.extrativista}>{item.extrativista}</p>
          <p id={styles.nome}>{item.materia_prima}</p>
          <p id={styles.data}>{formatarData(item.data_entrada)}</p>
          <p id={styles.quantidade}>{`${item.quantidade} kg`}</p>
          <p id={styles.preco}>{`${formatarReais(item.valor_pago)}`}</p>
          <ButtonsOptions
            onDelete={() => handleDelete(item.id)}
            onEdit={() => handleEdit(item)} // Adiciona a chamada para o método handleEdit quando o botão de edição é clicado
          />
        </div>
      ))}
      <DeleteConfirmationModal
        isOpen={!!selectedItem}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
      {/* Renderiza o modal de edição */}
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        editedItem={editedItem}
        setEditedItem={setEditedItem}
        onSave={(editedItem) => {
          // Implemente a lógica para salvar as alterações feitas no item
          console.log("Item editado:", editedItem);
          setIsEditModalOpen(false); // Fecha o modal após salvar as alterações
        }}
      />
    </div>
  );
};

export default ContainerCollects;
