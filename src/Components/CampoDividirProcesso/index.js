import './style.css';
import Botao from '../Botao';
import { useState, useEffect } from 'react';
import http from '../http';

export default function CampoDividir({ id, quantidade }) {
    const [quantidadeProcesso, setQuantidadeProcesso] = useState(quantidade);
    const [lote, setLote] = useState({});

    useEffect(() => {
        // Esta função será executada quando o componente for montado ou quando id mudar.
        const carregarProcesso = async () => {
            try {
                await http.get(`processos/${id}`)
                    .then(res => {
                        setLote(res.data);
                    })
            } catch (error) {
                console.error("Erro ao carregar o lote", error);
            }
        };

        carregarProcesso();
    }, [id]);

    const dividirLote = async () => {
        let quantidadeTotal = lote.Quantidade_de_entrada;
        let custoTotal = lote.despesas;
        let custoProcessado = (quantidadeProcesso / quantidadeTotal) * custoTotal;
        let custoNaoProcessado = custoTotal - custoProcessado;
        let quantidadeRestante = quantidadeTotal - quantidadeProcesso;

        const novoProcesso = {
            Lote_de_entrada: lote.lote_de_entrada,
            Finalizado: false,
            Quantidade_de_entrada: quantidadeProcesso,
            Higenizacao_selecao: lote.Higenizacao_selecao,
            Secagem: lote.Secagem,
            Despolpa: lote.Despolpa,
            Refrigeracao: lote.Refrigeracao,
            Destilacao: lote.Destilacao,
            Quebra_de_sementes: lote.Quebra_de_sementes,
            Selecao_de_amendoas: lote.Selecao_de_amendoas,
            Trituracao: lote.Trituracao,
            Prensagem: lote.Prensagem,
            Filtragem: lote.Filtragem,
            Envase: lote.Envase,
            selecao_primaria: lote.selecao_primaria,
            extrativistas: lote.extrativistas,
            locais: lote.locais,
            processo: lote.processo,
            despesas: custoProcessado,
            cozimento: lote.cozimento,
            estufagem: lote.estufagem,
            separacao: lote.separacao
        }

        const processoAntigoAtualizado = {
            Lote_de_entrada: lote.lote_de_entrada,
            Finalizado: false,
            Quantidade_de_entrada: quantidadeRestante,
            Higenizacao_selecao: lote.Higenizacao_selecao,
            Secagem: lote.Secagem,
            Despolpa: lote.Despolpa,
            Refrigeracao: lote.Refrigeracao,
            Destilacao: lote.Destilacao,
            Quebra_de_sementes: lote.Quebra_de_sementes,
            Selecao_de_amendoas: lote.Selecao_de_amendoas,
            Trituracao: lote.Trituracao,
            Prensagem: lote.Prensagem,
            Filtragem: lote.Filtragem,
            Envase: lote.Envase,
            selecao_primaria: lote.selecao_primaria,
            extrativistas: lote.extrativistas,
            locais: lote.locais,
            processo: lote.processo,
            despesas: custoNaoProcessado,
            cozimento: lote.cozimento,
            estufagem: lote.estufagem,
            separacao: lote.separacao
        }

        //criando novo processo
        await http.post('processos', novoProcesso).then(res => {
            console.log('Novo processo criado:', res.data);
        }).catch(error => {
            console.error('Erro ao criar novo processo:', error);
        })

        //atualizando processo antigo
        await http.put(`processos/${id}`, processoAntigoAtualizado).then(res => {
            console.log('Processo antigo atualizado:', res.data);
        }).catch(error => {
            console.error('Erro ao atualizar processo antigo:', error);
        })

        window.location.reload()
    };

    return (
        <>
            <fieldset>
                <legend></legend>
                <label>Digite a quantidade que gostaria de retirar do processo: {id}</label>
                <input type="number" value={quantidadeProcesso} onChange={(e) => setQuantidadeProcesso(e.target.value)} />
                <Botao text="Dividir" onClick={dividirLote} />
            </fieldset>
        </>
    );
}
