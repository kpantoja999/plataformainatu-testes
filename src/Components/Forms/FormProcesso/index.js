import { useState, useEffect } from 'react';
import Botao from '../../Botao';
import './style.css';
import { atualizaProcessos } from '../../../js/controleProcessos';
import { useNavigate } from 'react-router-dom';
import { insereGastosProdutivos } from '../../../js/gastosProcessos';
import { calcularPorcentagens } from '../../../js/valueFormatter.js';

export default function FormProcesso({ etapa, dadosProcesso, maquinas, colaboradores }) {
    const nomesMaquinas = maquinas.map((maquina) => maquina.tipo_processo);
    const nomesColaboradores = colaboradores.map((colaborador) => colaborador.nome);
    const navigate = useNavigate();

    const [perda, setPerda] = useState(0);
    const [rendimento, setRendimento] = useState(0);
    const [quantidadeFinal, setQuantidadeFinal] = useState(dadosProcesso.Quantidade_de_entrada);
    const [maquina, setMaquina] = useState('');
    const [diasTrabalhadosMaquina, setDiasTrabalhadosMaquina] = useState(0);
    const [fonteEnergia, setFonteEnergia] = useState('Rede Elétrica');
    const [horasTrabalhadasEnergia, setHorasTrabalhadasEnergia] = useState(0);
    const [funcionario, setFuncionario] = useState('');
    const [horasTrabalhadasFuncionario, setHorasTrabalhadasFuncionario] = useState(0);


    useEffect(() => {
        const { porcentagemPerda, porcentagemRendimento } = calcularPorcentagens(
            dadosProcesso.Quantidade_de_entrada,
            quantidadeFinal
        );
        setPerda(porcentagemPerda);
        setRendimento(porcentagemRendimento);
    }, [quantidadeFinal, dadosProcesso.Quantidade_de_entrada]);

    const concluir = async () => {
        try {
            await atualizaProcessos(
                dadosProcesso.id,
                dadosProcesso.processo,
                etapa,
                quantidadeFinal
            );
            await insereGastosProdutivos(
                dadosProcesso.id,
                etapa,
                maquina,
                diasTrabalhadosMaquina,
                fonteEnergia,
                horasTrabalhadasEnergia,
                funcionario,
                horasTrabalhadasFuncionario
            );
            navigate('/controleProcessos');
        } catch (error) {
            alert('Complete Todos os Campos', error);
        }
    };

    return (
        <div className="container-form">
            <form className="higenizacao">
                <fieldset>
                    <legend className="title-form">{etapa}</legend>
                    <div className="container-secoes-form">
                        <fieldset>
                            <legend>Materia-prima</legend>
                            <label>Quantidade de entrada</label>
                            <input
                                value={dadosProcesso.Quantidade_de_entrada || ''}
                                readOnly
                                type="number"
                            />
                        </fieldset>

                        <fieldset>
                            <legend>Maquina utilizada</legend>
                            <label>Escolha a maquina</label>
                            <select
                                value={maquina}
                                onChange={(e) => setMaquina(e.target.value)}
                                required
                            >
                                <option value="">Selecione</option>
                                {nomesMaquinas.map((nomeMaquina, index) => (
                                    <option key={index} value={nomeMaquina}>
                                        {nomeMaquina}
                                    </option>
                                ))}
                            </select>
                            <label>Dias Trabalhados</label>
                            <input
                                value={diasTrabalhadosMaquina}
                                onChange={(e) => setDiasTrabalhadosMaquina(e.target.value)}
                                type="number"
                                required
                            />
                        </fieldset>

                        <fieldset>
                            <legend>Consumo de Energia</legend>
                            <label>Fonte de energia</label>
                            <select
                                value={fonteEnergia}
                                onChange={(e) => setFonteEnergia(e.target.value)}
                                required
                            >
                                <option value={"Rede Elétrica"}>Rede Elétrica</option>
                                <option value={"Motor Estacionário"}>Motor Estacionário</option>
                            </select>
                            <label>Horas trabalhadas</label>
                            <input
                                value={horasTrabalhadasEnergia}
                                onChange={(e) => setHorasTrabalhadasEnergia(e.target.value)}
                                type="number"
                                required
                            />
                            <label>Consumo de energia</label>
                            <select>
                                <option value="kW">kW</option>
                                <option value="diesel">Diesel</option>
                                <option value="gasolina">Gasolina</option>
                                <option value="energia solar">Energia Solar</option>
                                <option value="não se aplica">Não se aplica</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <legend>Mão de obra</legend>
                            <label>Selecione o colaborador</label>
                            <select
                                value={funcionario}
                                onChange={(e) => setFuncionario(e.target.value)}
                                required
                            >
                                <option value="">Selecione</option>
                                {nomesColaboradores.map((nomeColaborador, index) => (
                                    <option key={index} value={nomeColaborador}>
                                        {nomeColaborador}
                                    </option>
                                ))}
                            </select>
                            <label>Horas trabalhadas</label>
                            <input
                                value={horasTrabalhadasFuncionario}
                                onChange={(e) => setHorasTrabalhadasFuncionario(e.target.value)}
                                type="number"
                                required
                            />
                        </fieldset>

                        <fieldset className="resultados">
                            <legend>Resultado</legend>
                            <label>Quantidade Final</label>
                            <input value={quantidadeFinal} onChange={(e) => setQuantidadeFinal(e.target.value)} type="number"/>
                            <label>Perda</label>
                            <input value={`${perda}%`} readOnly />
                            <label>Rendimento</label>
                            <input value={`${rendimento}%`} readOnly />
                        </fieldset>
                    </div>
                </fieldset>
            </form>
            <Botao
                text="Concluir"
                onClick={concluir}
                disabled={!quantidadeFinal  || !maquina || !funcionario}
            />
        </div>
    );
}
