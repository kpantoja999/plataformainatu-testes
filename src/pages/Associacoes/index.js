import React from 'react';
import './style.css';
import ASAGA from './log/logos associacoes svg/asaga.svg';
import ASPACS from "./log/logos associacoes svg/aspacs.svg";
import APADRIT from "./log/logos associacoes svg/apadrit.svg";
import APFOV from "./log/logos associacoes svg/apfov.svg";
import RDS from "./log/logos associacoes svg/rds.svg";
import { Link } from 'react-router-dom';



const Associacoes = () => {
    const avancaTela = () => {
        // Implemente a lógica desejada para avançar a tela
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <h1 className='title-associacao'>Escolha a sua associação</h1>
                {/* Coluna 1 */}
                <div className="col-12 col-md-4 mb-4">
                    <div className="card mx-auto">

                        <Link to={'/login/1'}>
                            <img src={ASAGA} alt="" width="260" />
                        </Link>

                    </div>
                </div>

                {/* Coluna 2 */}
                <div className="col-12 col-md-4 mb-4">
                    <div className="card mx-auto">

                        <Link to={'/login/2'}>
                            <img src={ASPACS} alt="" width="270" />
                        </Link>

                    </div>
                </div>

                {/* Coluna 3 */}
                <div className="col-12 col-md-4 mb-4">
                    <div className="card mx-auto">

                        <Link to={'/login/3'}>
                            <img src={APADRIT} alt="" width="270" />
                        </Link>

                    </div>
                </div>


                <div style={{display:'flex', justifyContent: 'space-around', width: '90%'}}>
                    <div className="col-12 col-md-7 mb-4">
                        <div className="card mx-auto">

                            <Link to={'/login/4'}>
                                <img src={APFOV} alt="" width="260" />
                            </Link>

                        </div>
                    </div>

                    <div className="col-12 col-md-2 mb-4">
                        <div className="card mx-auto">

                            <Link to={'/login/5'}>
                                <img src={RDS} alt="" width="260" />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

            <button id="btn-avancar" className="btn btn-warning btn-lg" onClick={avancaTela}>Próximo</button>
        </div>
    );
}

export default Associacoes;
