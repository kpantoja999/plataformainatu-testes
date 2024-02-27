import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './style.css';
import http from '../http';

const PieChart = ({ gastos }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await http.get(`processos/${gastos.processo_id}`);
        return resposta.data.despesas;
      } catch (error) {
        console.error('Erro ao buscar dados do processo:', error);
        return null;
      }
    };

    const initializeChart = async () => {
      const gProcesso = await fetchData();

      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = chartRef.current.getContext('2d');

      chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: [
            `Materia-prima: ${gProcesso} R$`,
            `Mão de obra: ${gastos.mao_de_obra} R$`,
            `Depreciação: ${gastos.depreciacao} R$`,
            `Energia: ${gastos.energia} R$`,
            `Insumos: ${gastos.insumos} R$`,
          ],
          datasets: [
            {
              label: 'Gastos Produtivos',
              data: [
                gastos.valor_materia_prima,
                gastos.mao_de_obra,
                gastos.depreciacao,
                gastos.energia,
                gastos.insumos,
              ],
              backgroundColor: [
                '#be6a14',
                '#653024',
                '#00491e',
                '#9caf88',
                '#ffa400',
              ],
            },
          ],
        },
      });
    };

    initializeChart();
  }, [gastos.processo_id, gastos.mao_de_obra, gastos.depreciacao, gastos.energia, gastos.insumos]);

  return (
    <section className='section-gastos'>
      <h1>Seus gastos produtivos</h1>
      <div className='grafico'>
        <canvas ref={chartRef} />
      </div>
    </section>
  );
};

export default PieChart;
