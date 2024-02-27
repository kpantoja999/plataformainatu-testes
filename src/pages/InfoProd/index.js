import { useLocation } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import PieChart from '../../Components/PieChart';
import { useEffect, useState } from 'react';
import http from '../../Components/http';

export default function InfoProd() {
  const location = useLocation();
  const lote = location.state.lote;
  const [gastos, setGastos] = useState(null);

  useEffect(() => {
    async function fetchGastos() {
      try {
        const res = await http.get('gastosProdutivos');
        const gastosProdutivos = res.data;

        // Função para remover milissegundos e segundos da data
        const removeMilissegundosSegundos = (data) => {
          const novaData = new Date(data);
          novaData.setSeconds(0, 0);
          return novaData;
        };

        const encontrado = gastosProdutivos.find(gasto =>
          removeMilissegundosSegundos(gasto.createdAt).getTime() ===
          removeMilissegundosSegundos(lote.createdAt).getTime()
        );
        setGastos(encontrado);

      } catch (error) {
        console.error('Erro ao buscar os gastos produtivos:', error);
      }
    }

    fetchGastos();
  }, [lote.createdAt]);

  return (
    <>
      <NavBar />
      {gastos !== null ? <PieChart gastos={gastos} /> : <p>Carregando...</p>}
    </>
  );
}

