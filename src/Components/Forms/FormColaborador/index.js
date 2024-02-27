import React, { useState } from 'react';
import http from '../../http';

const FormColaborador = () => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('M');
    const [comunidade, setComunidade] = useState('');
    const [funcao, setFuncao] = useState('');
    const [valorHora, setValorHora] = useState('');
    const [diaria, setDiaria] = useState('');

    const cadastrar = (e) => {
        e.preventDefault();

        const formData = {
            nome: nome,
            idade: idade,
            sexo: sexo,
            comunidade: comunidade,
            funcao: funcao,
            valor_hora: valorHora,
            valor_diaria: diaria
        };

        http.post('/funcionarios', formData)
            .then(res => {
                alert('Formulário de Colaborador enviado com sucesso:', res.data);
                setNome('');
                setIdade('');
                setSexo('M');
                setComunidade('');
                setFuncao('');
                setValorHora('');
                setDiaria('');
            })
            .catch(error => {
                console.error('Erro ao enviar formulário de Colaborador:', error);
                alert('Operação não realizada!');
            });
    }

    return (
        <div className="funcionario-cadastro-inativo div-form">
            <form action="" className="extra" onSubmit={cadastrar}>

                <label htmlFor="">Nome:</label>
                <input type="text" placeholder="Insira seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />

                <label htmlFor="">Idade:</label>
                <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />

                <label>Sexo</label>
                <select name="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="">Comunidade:</label>
                <input type="text" placeholder="comunidade/distrito/rio/igarapé" value={comunidade} onChange={(e) => setComunidade(e.target.value)} />

                <label htmlFor="">Função:</label>
                <input type="text" placeholder="Ex. Operador de máquina" value={funcao} onChange={(e) => setFuncao(e.target.value)} />

                <label htmlFor="">Valor Hora:</label>
                <input type="number" placeholder="Valor/hora R$" value={valorHora} onChange={(e) => setValorHora(e.target.value)} />

                <label htmlFor="">Diária:</label>
                <input type="number" placeholder="Valor diária R$" value={diaria} onChange={(e) => setDiaria(e.target.value)} />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default FormColaborador;
