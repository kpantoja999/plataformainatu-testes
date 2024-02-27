import React from "react";
import "./style.css";

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <h2>Confirmar Exclusão</h2>
          <p>Tem certeza de que deseja excluir este item?</p>
          <div>
            <button onClick={onConfirm}>Confirmar</button>
            <button onClick={onClose}>Cancelar</button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteConfirmationModal;
