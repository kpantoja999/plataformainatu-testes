import React, { useState, useEffect } from "react";
import "./style.css";

const EditModal = ({ isOpen, onClose, editedItem, onSave }) => {
  const [extrativista, setExtrativista] = useState("");
  const [dataEntrada, setDataEntrada] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [valorPago, setValorPago] = useState(0);

  useEffect(() => {
    // Popula os campos de entrada com os dados do item atual quando o modal é aberto
    if (editedItem) {
      setExtrativista(editedItem.extrativista);
      setDataEntrada(editedItem.data_entrada);
      setQuantidade(editedItem.quantidade);
      setValorPago(editedItem.valor_pago);
    }
  }, [editedItem]);

  const handleSave = () => {
    // Cria um objeto com os dados editados
    const editedData = {
      ...editedItem,
      extrativista: extrativista,
      data_entrada: dataEntrada,
      quantidade: quantidade,
      valor_pago: valorPago,
    };
    // Chama a função onSave passando os dados editados
    onSave(editedData);
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <h2>Editar Dados</h2>
          <form>
            <label>Extrativista:</label>
            <input
              type="text"
              value={extrativista}
              onChange={(e) => setExtrativista(e.target.value)}
            />
            <label>Data de Entrada:</label>
            <input
              type="date"
              value={dataEntrada}
              onChange={(e) => setDataEntrada(e.target.value)}
            />
            <label>Quantidade Coletada (kg):</label>
            <input
              type="number"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
            <label>Valor Pago pela Coleta:</label>
            <input
              type="number"
              value={valorPago}
              onChange={(e) => setValorPago(e.target.value)}
            />
            <button type="button" onClick={handleSave}>
              Salvar
            </button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default EditModal;
