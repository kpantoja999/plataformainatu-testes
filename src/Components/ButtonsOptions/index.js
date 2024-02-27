// ButtonsOptions.js

import React from "react";
import editar from "../../assets/img/icon-editar.svg";
import deletar from "../../assets/img/icon-deletar.svg";

import styles from "./ButtonsOptions.module.css";

const ButtonsOptions = ({ onEdit, onDelete }) => {
  return (
    <div className={styles.btns_icon}>
      <button className={styles.btns} onClick={onEdit}>
        <img src={editar} alt="icon-editar" title="editar" />
      </button>
      <button className={styles.btns} onClick={onDelete}>
        <img src={deletar} alt="icon-deletar" title="deletar" />
      </button>
    </div>
  );
};

export default ButtonsOptions;
