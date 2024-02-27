import React, { useState } from 'react';
import NavBar from '../../Components/NavBar';
import './style.css';
import CabecalhoCadastros from '../../Components/Forms/CabecalhoCadastros';
import FormExtrativista from '../../Components/Forms/FormExtrativista';
import FormColaborador from '../../Components/Forms/FormColaborador';
import FormMaquina from '../../Components/Forms/FormMaquina';
import FormEmbalagem from '../../Components/Forms/FormEmbalagem';

export default function Cadastro() {
  const [formularioSelecionado, setFormularioSelecionado] = useState(null);

  const mostrarFormulario = (formulario) => {
    setFormularioSelecionado(formulario);
  };

  return (
    <>
      <NavBar />
      <div className="container-cadastros">
        <CabecalhoCadastros mostrarFormulario={mostrarFormulario} />
        {formularioSelecionado === 'extrativista' && <FormExtrativista />}
        {formularioSelecionado === 'colaborador' && <FormColaborador />}
        {formularioSelecionado === 'maquina' && <FormMaquina />}
        {formularioSelecionado === 'embalagem' && <FormEmbalagem />}
      </div>
    </>
  );
}
