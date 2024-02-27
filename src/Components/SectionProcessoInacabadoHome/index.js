import React, { useState, useEffect } from "react";
import './style.css';
import botao from '../../assets/img/icon=continue.svg';
import { Link } from "react-router-dom";

export default function SectionProcessoInacabadoHome({ dadosDoBanco }) {
  const [processo, setProcesso] = useState(false);

  useEffect(() => {
    if (dadosDoBanco && dadosDoBanco.length > 0) {
      const temProcessoInacabado = dadosDoBanco.some(item => item.Finalizado === false);
      setProcesso(temProcessoInacabado);
    } else {
      setProcesso(false);
    }
  }, [dadosDoBanco]);

  return (
    <>
      {processo ? (
        <div className="remove-background">
          <h1 className="title">Processos produtivos pendentes</h1>
          {dadosDoBanco.map((item) => (
            item.Finalizado === false && (
              <div key={item.id} className="processo-div">
                <p className="processo-item processo-item-id"># <span>{item.id}</span></p>
                <p className="processo-item processo-item-nome"><span>{item.processo}</span></p>
                <Link to={'/controleProcessos'}><img className="processo-item-btn" src={botao} /></Link>
              </div>
            )
          ))}
        </div>
      ) : (
        <div className="box-text container-processos-pendentes">
          <h1 className="titulo-1">Bem-vindo!</h1>
          <p className="titulo-2" >Seus processos irão aparecer aqui</p>
        </div>
      )}
    </>
  );
}
