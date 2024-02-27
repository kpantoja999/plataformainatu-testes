import './style.css';
import Botao from '../Botao';
import { useState, useEffect } from 'react';
import http from '../http';

export default function CampoDividir({ id, quantidade }) {
    const [quantidadeProcesso, setQuantidadeProcesso] = useState(quantidade);
    const [lote, setLote] = useState({});

    useEffect(() => {
        // Esta função será executada quando o componente for montado ou quando id mudar.
        const carregarLote = async () => {
            try {
                await http.get(`loteEntradas/${id}`)
                    .then(res => {
                        setLote(res.data);
                    })
            } catch (error) {
                console.error("Erro ao carregar o lote", error);
            }
        };

        carregarLote();
    }, [id]);

    const dividirLote = async () => {
        let quantidadeTotal = lote.quantidade;
        let custoTotal = lote.valor_pago;
        let custoProcessado = (quantidadeProcesso / quantidadeTotal) * custoTotal;
        let custoNaoProcessado = custoTotal - custoProcessado;
        let quantidadeRestante = quantidadeTotal - quantidadeProcesso;

        const novoLote = {
            ativo: true,
            extrativista: lote.extrativista,
            local: lote.local,
            materia_prima: lote.materia_prima,
            quantidade: quantidadeProcesso,
            valor_pago: custoProcessado
        }

        const loteAntigoAtualizado = {
            ativo: true,
            extrativista: lote.extrativista,
            local: lote.local,
            materia_prima: lote.materia_prima,
            quantidade: quantidadeRestante,
            valor_pago: custoNaoProcessado
        }

        //criando novo lote
        await http.post('loteEntradas', novoLote).then(res => {
            console.log('Novo lote criado:', res.data);
        }).catch(error => {
            console.error('Erro ao criar novo lote:', error);
        })

        //atualizando lote antigo
        await http.put(`loteEntradas/${id}`, loteAntigoAtualizado).then(res => {
            console.log('Lote antigo atualizado:', res.data);
        }).catch(error => {
            console.error('Erro ao atualizar lote antigo:', error);
        })

        window.location.reload()
    };

    return (
        <>
            <fieldset>
                <legend></legend>
                <label>Digite a quantidade que gostaria de retirar do lote: {id}</label>
                <input type="number" value={quantidadeProcesso} onChange={(e) => setQuantidadeProcesso(e.target.value)} />
                <Botao text="Dividir" onClick={dividirLote} />
            </fieldset>
        </>
    );
}
