import NavBar from "../../Components/NavBar";
import SectionProcessoInacabadoHome from "../../Components/SectionProcessoInacabadoHome";
import './style.css';
import { useState, useEffect } from 'react';
import http from '../../Components/http/index.js';
import { useAuth } from "../../context/AuthContext.js";

export default function Home() {
  const { user, loading, associacao, selectCont, cont} = useAuth();
  const [dadosDoBanco, setDados] = useState([]);

  useEffect(() => {

    if(cont != 0){
      selectCont(0);
      window.location.reload();
    }

    http.get('processos')
      .then(res => {
        setDados(res.data);
    });
    
  }, [user]);

  if (!user) {
    // Se o usuário não estiver autenticado, você pode redirecionar para a página de login ou fazer qualquer outra ação desejada
    // Exemplo de redirecionamento usando react-router-dom:
    // useHistory é um hook fornecido pelo react-router-dom
    // import { useHistory } from 'react-router-dom';
    // const history = useHistory();
    // history.push('/login');
    
    // Ou renderizar uma mensagem de não autenticado
    return <div>Você não está autenticado. Faça login para acessar esta página.</div>;
  }

  return (
    <>
      <NavBar />
      <SectionProcessoInacabadoHome
        dadosDoBanco={dadosDoBanco}
      />
    </>
  );
}

