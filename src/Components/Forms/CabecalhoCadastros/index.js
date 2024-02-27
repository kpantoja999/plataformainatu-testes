import './style.css';

const CabecalhoCadastros = ({ mostrarFormulario }) => {
  return (
    <div className="cabecalho-cadastros">
      <h1>Cadastros</h1>

      <button onClick={() => mostrarFormulario('extrativista')} className="bt">
        Extrativista
      </button>
      <button onClick={() => mostrarFormulario('colaborador')} className="bt">
        Colaborador
      </button>
      <button onClick={() => mostrarFormulario('maquina')} className="bt">
        Maquinário
      </button>
      <button onClick={() => mostrarFormulario('embalagem')} className="bt">
        Embalagem
      </button>
    </div>
  );
};

export default CabecalhoCadastros;
