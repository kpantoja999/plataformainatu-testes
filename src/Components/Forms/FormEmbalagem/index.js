import React, { useState } from 'react';
import http from '../../http';

const FormEmbalagem = () => {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const cadastrar = (e) => {
        e.preventDefault();

        const formData = {
            nome: nome,
            valor: valor,
            quantidade: quantidade
        };

        http.post('/embalagens', formData)
            .then(res => {
                alert('Formulário de Embalagem enviado com sucesso:', res.data);
                setNome('');
                setValor('');
                setQuantidade('');
            })
            .catch(error => {
                console.error('Erro ao enviar formulário de Embalagem:', error);
                alert('Operação não realizada!');
            });
    }

    return (
        <div className="embalagem-cadastro-inativo div-form">
            <form action="" className="extra" onSubmit={cadastrar}>

                <label htmlFor="">Nome:</label>
                <input type="text" placeholder="saco, balde" value={nome} onChange={(e) => setNome(e.target.value)} />

                <label htmlFor="">Valor:</label>
                <input type="number" placeholder="0,00 R$" value={valor} onChange={(e) => setValor(e.target.value)} />

                <label htmlFor="">Quantidade</label>
                <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default FormEmbalagem;
