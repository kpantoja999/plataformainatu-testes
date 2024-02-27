import React, { useState } from 'react';
import http from '../../http';
import Botao from '../../Botao';
import './style.css';

const FormColeta = () => {
    const [data, setData] = useState('');
    const [produto, setProduto] = useState('');
    const [extrativista, setExtrativista] = useState('');
    const [local, setLocal] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [precoPorKg, setPrecoPorKg] = useState(0);
    const [valorPago, setValorPago] = useState(0);

    const atualizarValorPago = (e) => {
        setValorPago(quantidade * e.target.value);
    }
    const atualizarValorPago2 = (e) =>{
        setValorPago(precoPorKg * e.target.value)
    }

    const receberColeta = async(e) => {
        e.preventDefault();
        const dados = {
            data_entrada: data,
            materia_prima: produto,
            extrativista: extrativista,
            local: local,
            quantidade: quantidade,
            valor_pago: valorPago,
            ativo: true
        }
        await http.post('coletas', dados).then(res => {
            console.log(res.data);
            alert('Coleta cadastrada com sucesso!');
            window.location.reload();
        }).catch(error => {
            alert(error);
        })
    }

    return (
        <form className="formColeta">
            <fieldset className="extra">
                <div className='alinhar-horizontal'>
                    <div>
                        <label>Data de Entrada</label>
                        <input
                            type="date"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Matéria-prima</label>
                        <select
                            name="materia-prima"
                            id=""
                            value={produto}
                            onChange={(e) => setProduto(e.target.value)}
                        >
                            <option>Selecione</option>
                            <option value="açai">Açaí</option>
                            <option value="andiroba">Andiroba</option>
                            <option value="breu">Breu</option>
                            <option value="buriti">Buriti</option>
                            <option value="cacau">Cacau</option>
                            <option value="cafe verde">Café Verde</option>
                            <option value="castanha">Castanha</option>
                            <option value="copaiba">Copaíba</option>
                            <option value="citronela">Citronela</option>
                            <option value="cumaru">Cumaru</option>
                            <option value="cupuacu">Cupuaçu</option>
                            <option value="latex">Látex</option>
                            <option value="murumuru">Murumuru</option>
                            <option value="pataua">Patauá</option>
                            <option value="pau rosa">Pau rosa</option>
                            <option value="pimenta de macaco">Pimenta de macaco</option>
                            <option value="pitanga">Pitanga</option>
                            <option value="priprioca">Priprioca</option>
                            <option value="sangue de dragao">Sangue de dragão</option>
                            <option value="tucuma amendoa">Tucumã amêndoa</option>
                            <option value="tucuma semente">Tucumã semente</option>
                            <option value="ucuuba">Ucuuba</option>
                        </select>
                    </div>
                </div>

                <label>Produtor/Extrativista</label>
                <input
                    type="text"
                    value={extrativista}
                    onChange={(e) => setExtrativista(e.target.value)}
                />

                <label>Local de Coleta</label>
                <input
                    type="text"
                    value={local}
                    onChange={(e) => setLocal(e.target.value)}
                />

                <label>Quantidade em Kg</label>
                <input
                    type="number"
                    value={quantidade}
                    onChange={(e) => {setQuantidade(e.target.value); atualizarValorPago2(e)}}
                />

                <label>Preço por Kg</label>
                <input
                    type="number"
                    value={precoPorKg}
                    onChange={(e) => {setPrecoPorKg(e.target.value); atualizarValorPago(e)}}
                />

                <label>Valor a ser pago R$</label>
                <input
                    type="number"
                    step='0.01'
                    value={valorPago}
                    readOnly
                />
            </fieldset>

            <Botao text='Receber Coleta' onClick={receberColeta} />
        </form>
    );
}

export default FormColeta;
