import React from "react";
import { Link } from "react-router-dom";
import { iconsInatu } from '../../../js/iconsMateriasPrimas';
import './style.css'

export default function CardEscolheProcesso({ nomesProcesso }) {
    return (
        <div>
            {nomesProcesso.map((item) => (
                <Link to={`/prepararLoteDeEntrada/${item.id}`} key={item.id}>
                    <button id={item.id} className="escolhe-processos">
                        <span>
                            <img src={item.id === 'cafe verde' ? iconsInatu['cafe_verde'] : iconsInatu[item.id]}/>
                        </span>
                        {item.processo === 'cafe verde' ? item.processo = 'cafe_verde' : item.processo }
                    </button>
                </Link>
            ))}
        </div>
    );
}
