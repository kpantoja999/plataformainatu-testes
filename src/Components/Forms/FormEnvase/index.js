import { useEffect, useState } from "react";
import Botao from "../../Botao";
import http from "../../http";
import './style.css';
import { finalizar } from "../../../js/finalizarProcesso";
import { useNavigate } from "react-router-dom";


export default function FormEnvase({ processo, depreciacao, energia, maoDeObra, materiaPrima }) {
    const [embalagens, setEmbalagens] = useState([]);
    const [quantidade, setQuantidade] = useState(0);
    const [valor, setValor] = useState(0);
    const [estoque, setEstoque] = useState(0);
    const [embalagemId, setEmbalagemId] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        http.get('embalagens').then(res => {
            setEmbalagens(res.data)
        }).catch(error => {
            console.log(error)
        })
    }, []);

    return (
        <>
            <form action="" className="embalagem">
                <fieldset>
                    <legend>Embalagem</legend>

                    <label>Nome</label>
                    <select
                        value={valor}
                        onChange={(e) => {
                            setValor(e.target.value);
                            const quantidadeEstoque = e.target.options[e.target.selectedIndex].getAttribute('data-quantidade');
                            setEstoque(quantidadeEstoque);
                            setEmbalagemId(e.target.options[e.target.selectedIndex].getAttribute('data-embalagemid'));
                        }}
                    >
                        <option>Selecione</option>
                        {embalagens.map(item => (
                            <option 
                                data-quantidade={item.quantidade} 
                                data-embalagemid={item.id} 
                                value={item.valor} 
                                key={item.id}
                            >{item.nome}</option>
                        ))}
                    </select>

                    <label>Quantidade</label>
                    <input onChange={(e) => setQuantidade(e.target.value)} type="number" />
                </fieldset>
                <Botao
                    text='Finalizar'
                    onClick={ async (e) => {
                        await finalizar(e, processo, depreciacao, energia, maoDeObra, materiaPrima, valor, quantidade, estoque, embalagemId);
                        navigate('/home')
                    }}
                />
            </form>
            <div className="container-embalagens-estoque">
                <h2>Quantidade de embalagens em estoque:</h2>
                <h3>{estoque}</h3>
            </div>
        </>
    )
}