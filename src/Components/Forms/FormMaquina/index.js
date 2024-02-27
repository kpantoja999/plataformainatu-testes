import React, { useState } from 'react';
import http from '../../http';

const FormMaquina = () => {
    const [nome, setNome] = useState('');
    const [tipoMaquina, setTipoMaquina] = useState('higienizadora');
    const [energia, setEnergia] = useState('kw');
    const [potencia, setPotencia] = useState('');
    const [valor, setValor] = useState('');
    const [dataAquisicao, setDataAquisicao] = useState('');
    const [vidaUtil, setVidaUtil] = useState('');
    const [diasTrabalhados, setDiasTrabalhados] = useState('');
    const [horasTrabalhadas, setHorasTrabalhadas] = useState('');

    const cadastrar = (e) => {
        e.preventDefault();

        const formData = {
            nome: nome,
            tipo_processo: tipoMaquina,
            fonte_energia: energia,
            potencia: potencia,
            valor: valor,
            data_aquisicao: dataAquisicao,
            vida_util: vidaUtil,
            dias_utilizados: diasTrabalhados,
            horas_trabalhadas: horasTrabalhadas
        };

        http.post('/maquinas', formData)
            .then(res => {
                alert('Formulário de Máquina enviado com sucesso:', res.data);
                setNome('');
                setTipoMaquina('higienizadora');
                setEnergia('kw');
                setPotencia('');
                setValor('');
                setDataAquisicao('');
                setVidaUtil('');
                setDiasTrabalhados('');
                setHorasTrabalhadas('');
            })
            .catch(error => {
                console.error('Erro ao enviar formulário de Máquina:', error);
                alert('Operação não realizada!');
            });
    }

    return (
        <div className="maquinario-cadastro-inativo div-form">
            <form action="" className="extra alinhar-horizontal-form-maquinas" onSubmit={cadastrar}>

                <div>
                    <label>Nome:</label>
                    <input type="text" placeholder="Insira seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />

                    <label>Tipo da máquina</label>
                    <select value={tipoMaquina} onChange={(e) => setTipoMaquina(e.target.value)}>
                        <option value="higienizadora">Higienizadora</option>
                        <option value="seletora">Seletora</option>
                        <option value="quebradora">Quebradora</option>
                        <option value="secadora">Secadora</option>
                        <option value="despolpadora">Despolpador</option>
                        <option value="destiladora">Destiladora</option>
                        <option value="trituradora">Trituradora</option>
                        <option value="prensa">Prensa</option>
                        <option value="filtro">Filtro</option>
                    </select>

                    <label>Energia</label>
                    <select value={energia} onChange={(e) => setEnergia(e.target.value)}>
                        <option value="kw">Rede Elétrica</option>
                        <option value="diesel">Motor Estacionário</option>
                    </select>

                    <label>Potência</label>
                    <input type="number" placeholder="kW" value={potencia} onChange={(e) => setPotencia(e.target.value)} />

                    <label>Valor</label>
                    <input type="number" placeholder="0,00 R$" value={valor} onChange={(e) => setValor(e.target.value)} />
                </div>

                <div>
                    <label>Data de Aquisição</label>
                    <input type="date" value={dataAquisicao} onChange={(e) => setDataAquisicao(e.target.value)} />

                    <label>Vida Útil</label>
                    <input type="number" value={vidaUtil} onChange={(e) => setVidaUtil(e.target.value)} />

                    <label>Dias trabalhados</label>
                    <input type="number" value={diasTrabalhados} onChange={(e) => setDiasTrabalhados(e.target.value)} />

                    <label>Horas trabalhadas</label>
                    <input type="number" value={horasTrabalhadas} onChange={(e) => setHorasTrabalhadas(e.target.value)} />

                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default FormMaquina;
