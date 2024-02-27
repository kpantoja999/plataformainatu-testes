import React, { useState } from 'react';
import http from '../../http';

const FormExtrativista = () => {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('M');
    const [cpf, setCpf] = useState('');
    const [idade, setIdade] = useState('');
    const [apelido, setApelido] = useState('');
    const [comunidade, setComunidade] = useState('');

    const cadastrar = (e) => {
        e.preventDefault();

        const formData = {
            nome: nome,
            sexo: sexo,
            cpf: cpf,
            idade: idade,
            apelido: apelido,
            comunidade: comunidade
        };

        http.post('/extrativistas', formData)
            .then(res => {
                alert(`Formulário de Extrativista enviado com sucesso!`);
                setNome('');
                setSexo('M');
                setCpf('');
                setIdade('');
                setApelido('');
                setComunidade('');
            })
            .catch(error => {
                console.error('Erro ao enviar formulário de Extrativista:', error);
                alert('Operação não realizada!');
            });
    }

    return (
        <div className="extrativista-cadastro-inativo div-form">
            <form action="" className="extra">

                <label htmlFor="">Nome:</label>
                <input type="text" placeholder="Insira seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />

                <label>Sexo</label>
                <select name="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="">CPF:</label>
                <input type="text" placeholder="000.000.000-00" value={cpf} onChange={(e) => setCpf(e.target.value)} />

                <label htmlFor="">Idade:</label>
                <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />

                <label htmlFor="">Apelido:</label>
                <input type="text" placeholder="Insira o apelido (opcional)" value={apelido} onChange={(e) => setApelido(e.target.value)} />

                <label htmlFor="">Comunidade:</label>
                <input type="text" placeholder="comunidade/distrito/rio/igarapé" value={comunidade} onChange={(e) => setComunidade(e.target.value)} />

                <button type="submit" onClick={cadastrar}>Cadastrar</button>
            </form>
        </div>
    )
}

export default FormExtrativista;
