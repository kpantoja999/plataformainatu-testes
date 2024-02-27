import { useState } from "react";
import { iconsInatu } from "../../../js/iconsMateriasPrimas";
import BtnDividir from "../../BtnDividir";
import './style.css'
import CampoDividir from "../../CampoDividir";
import Botao from "../../Botao";
import http from "../../http";
import { formatarTextoComAcento } from "../../../js/valueFormatter";
import { useNavigate } from "react-router-dom";

export default function CardLoteDeEntrada({ lotesEntrada }) {
    const lotes = lotesEntrada.filter(lote => lote.ativo === true);
    const [componenteVisivel, setComponenteVisivel] = useState(false);
    const [identificador, setIdentificar] = useState(0);
    const [quantidadeDividir, setQuantidadeDividir] = useState(0);

    const navigate = useNavigate();

    const mostrarComponente = (identificador, quantidade) => {
        setComponenteVisivel(true);
        setIdentificar(identificador);
        setQuantidadeDividir(quantidade);
    }

    const iniciarProcesso = async (id, quantidade, extrativistas, locais, materiaPrima, valor_pago) => {
        const processo = {
            Despolpa: false,
            Destilacao: false,
            Envase: false,
            Filtragem: false,
            Finalizado: false,
            Higenizacao_selecao: true,
            Lote_de_entrada: id,
            Prensagem: false,
            Quantidade_de_entrada: quantidade,
            Quebra_de_sementes: false,
            Refrigeracao: false,
            Secagem: false,
            Selecao_de_amendoas: false,
            Trituracao: false,
            cozimento: false,
            despesas: valor_pago,
            estufagem: false,
            extrativistas: extrativistas,
            locais: locais,
            processo: materiaPrima,
            selecao_primaria: false,
            separacao: false
        }

        await http.post(`processos`, processo).then(res => {
            console.log('Processo iniciado: ',res.data)
        }).catch(error => {
            console.log('Erro ao iniciar o processo: ', error)
        })

        const desativarLoteDeEntrada = {
            ativo: false
        }

        await http.put(`loteEntradas/${id}`, desativarLoteDeEntrada).then(res => {
            console.log(`Lote desativado: `, res.data)
        }).catch(error => {
            console.log(`Error ao atualizar o lote: `, error)
        })

        navigate('/controleProcessos');
    }

    return (
        <>
            <div className="container-card-lote-entrada">
                {lotes.map((lote) => (
                    <div className="loteItem" key={lote.id}>
                        <p># {lote.id}</p>
                        <img src={lote.materia_prima === 'cafe verde' ? iconsInatu['cafe_verde'] : iconsInatu[lote.materia_prima]} alt={lote.materia_prima} />
                        <div>
                            <p>{lote.materia_prima}</p>
                            <p><span>{lote.quantidade}</span> Kg</p>
                        </div>
                        <div>
                            <Botao text='Iniciar Processo' onClick={() => 
                                iniciarProcesso(lote.id, lote.quantidade, lote.extrativista, lote.local, lote.materia_prima, lote.valor_pago)} 
                            />
                            <BtnDividir text='Dividir lote' onClick={() => mostrarComponente(lote.id, lote.quantidade)} />
                        </div>
                    </div>
                ))}
            </div>

            {componenteVisivel && <CampoDividir id={identificador} quantidade={quantidadeDividir} />}
        </>
    )
}
