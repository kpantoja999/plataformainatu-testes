import { formatarData, formatarPeso, formatarReais, formatarTextoComAcento } from '../../../js/valueFormatter';
import { useState } from 'react';
import CardSomaPeso from '../CardSomaPeso';
import Botao from '../../Botao';
import './style.css';
import http from '../../http';

export default function CardColetaLoteDeEntrada({ coletas, materiaPrima }) {
    const [pesoAcumulado, setPesoAcumulado] = useState(0);
    const [cardsClicados, setCardsClicados] = useState([]);
    const [extrativistas, setExtrativistas] = useState([]);
    const [locais, setLocais] = useState([]);
    const [valorPago, setValorPago] = useState(0);
    const [ativo, setAtivo] = useState(true);

    const handleClickCard = (item) => {
        if (cardsClicados.includes(item.id)) {
            // Se o item já foi clicado, reverta as alterações
            setPesoAcumulado(pesoAcumulado - item.quantidade);
            setCardsClicados(cardsClicados.filter(id => id !== item.id));
            setExtrativistas(extrativistas.filter(name => name !== item.extrativista));
            setLocais(locais.filter(local => local !== item.local));
            setValorPago(valorPago - item.valor_pago);
        } else {
            // Caso contrário, adicione o item como clicado
            setPesoAcumulado(pesoAcumulado + item.quantidade);
            setCardsClicados([...cardsClicados, item.id]);
            setExtrativistas([...extrativistas, item.extrativista]);
            setLocais([...locais, item.local]);
            setValorPago(valorPago + item.valor_pago);
        }
    };

    const coletasFiltradas = coletas.filter(item => item.materia_prima === materiaPrima && item.ativo === true);

    const criaLoteDeEntrada = async () => {
        // Crie as strings finais a partir dos arrays
        const extrativistaFinal = extrativistas.join(' | ');
        const locaisFinal = locais.join(' | ');

        const loteDeEntrada = {
            materia_prima: materiaPrima,
            extrativista: extrativistaFinal,
            local: locaisFinal,
            quantidade: pesoAcumulado,
            valor_pago: valorPago,
            ativo: ativo
        };

        const desativerColetasSelecionadas = async () => {
            for (const coleta of cardsClicados) {
                try {
                    console.log(coleta)
                    const res = await http.put(`coletas/${coleta}`, { ativo: false });
                    console.log(`Coleta ${coleta} atualizada com sucesso.`);
                } catch (error) {
                    console.log(`Erro ao atualizar coleta ${coleta}:`, error);
                }
            }
        };
        await  desativerColetasSelecionadas();

        try {
            const res = await http.post('loteEntradas', loteDeEntrada);
            console.log('Dados cadastrados com sucesso:', res.data);
        } catch (error) {
            console.log('Erro ao cadastrar dados:', error);
        }

        window.location.reload();
    }

    return (
        <>
            {coletasFiltradas.map((item) => (
                <div
                    className={`coleta-item ${cardsClicados.includes(item.id) ? 'clicado' : ''}`}
                    key={item.id}
                    onClick={() => handleClickCard(item)}
                >
                    <p className={`text-item item-id ${cardsClicados.includes(item.id) ? 'text-item item-id-check' : ''}`} id="idLT">{item.id}</p>
                    <p className="text-item" id="dataLT">{formatarData(item.data_entrada)}</p>
                    <p className="text-item" id="materia-primaLT">{item.materia_prima}</p>
                    <p className="text-item" id="extrativistaLT">{item.extrativista}</p>
                    <p className="text-item" id="localLT">{item.local}</p>
                    <p className="text-item" id="quantidadeLT">{formatarPeso(item.quantidade)}</p>
                    <p className="text-item" id="precoLT"><span id="preço">{formatarReais(item.valor_pago)}</span></p>
                </div>
            ))}
            <div className='container'>
                <CardSomaPeso somaPesos={pesoAcumulado} />
                <Botao text='Criar' onClick={criaLoteDeEntrada} />
            </div>
        </>
    )
}


