import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importe useParams para acessar os parâmetros da URL
import CardColetaLoteDeEntrada from "../../Components/Cards/CardColetaLoteDeEntrada";
import NavBar from "../../Components/NavBar";
import SectionAlinharVertical from "../../Components/SectionAlinharVertical";
import http from "../../Components/http";

export default function PrepararLoteDeEntrada() {
  const { id } = useParams(); // Obtenha o ID da URL
  const [dadosDaColeta, setDadosDaColeta] = useState([]);

  useEffect(() => {
    // Use o ID da URL para fazer alguma lógica específica com base no processo selecionado
    // Execute a lógica de busca de dados usando o ID se necessário

    http.get('coletas')
      .then(res => {
        setDadosDaColeta(res.data);
      });
  }, [id]);

  return (
    <>
      <NavBar />
      <SectionAlinharVertical title='Criar lote de entrada'>
        <CardColetaLoteDeEntrada materiaPrima={id} coletas={dadosDaColeta} />
      </SectionAlinharVertical>
    </>
  );
}
