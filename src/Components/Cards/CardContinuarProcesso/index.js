import { Link } from "react-router-dom";
import { iconsInatu } from "../../../js/iconsMateriasPrimas";
import Botao from "../../Botao";
import BtnDividir from "../../BtnDividir";
import './style.css';
import { formatarTextoComAcento } from "../../../js/valueFormatter";
import { useState } from "react";
import CampoDividirProcesso from '../../CampoDividirProcesso';


export default function CardContinuarProcesso({ processos }) {
    const [componenteVisivel, setComponenteVisivel] = useState(false);
    const [id, setId] = useState(0);
    const [quantidade, setQuantidade] = useState(0);

    const mostrarComponente = (id, quantidade) => {
        setComponenteVisivel(true);
        setQuantidade(quantidade);
        setId(id);
    }


    return (
        <div className="CardContinuarProcesso">
            <div className="container-card-processo">
                {processos.map((processo) => (
                    // Verifica se processo.Finalizado é igual a false
                    processo.Finalizado === false && (
                        <div className="processoItem" key={processo.id}>
                            <p># {processo.id}</p>
                            <img src={processo.processo === 'cafe verde' ? iconsInatu['cafe_verde'] : iconsInatu[processo.processo]} alt={processo.processo} />
                            <div>
                                <p>{formatarTextoComAcento(processo.processo)}</p>
                                <p><span>{processo.Quantidade_de_entrada}</span> Kg</p>
                            </div>
                            <div>
                                <Link to={`/processamento/${processo.id}`}>
                                    <Botao text='Continuar' />
                                </Link>
                                <BtnDividir text='Dividir lote' onClick={() => mostrarComponente(processo.id, processo.Quantidade_de_entrada)} />
                            </div>
                        </div>
                    )
                ))}
            </div>
            {componenteVisivel && <CampoDividirProcesso id={id} quantidade={quantidade}/>}
        </div>
    );
}
