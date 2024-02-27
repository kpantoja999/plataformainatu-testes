import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import { materiasPrimasNomeImg, iconsInatu } from "../../js/iconsMateriasPrimas";
import http from '../../Components/http';
import styles from './ColetasRecebidas.module.css';
import AllCollects from "../../Components/AllCollects";

const ColetasRecebidas = () => {
    const [visivel, setVisivel] = useState(true);
    const [collection, setCollection] = useState([]);
    const [collect, setCollect] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        http.get('coletas')
            .then(res => setCollection(res.data))
            .catch(error => console.log('Erro ao carregar as coletas: ', error));
    }, []);

    const selectCollect = (collect, icon) => {
        setVisivel(!visivel);
        setCollect(collect);
        setIcon(icon);
    };

    return (
        <>
            <NavBar />
            {visivel &&
                <div className={styles.mainColetasRecebidas}>
                    <h1>Coletas</h1>
                    <h2>Selecione a matéria-prima</h2>
                    <div className={styles.containerMateriasPrimas}>
                        {materiasPrimasNomeImg.map(({ nomeA, nomeB, nomeDataBase }) => (
                            <div key={nomeA} className={styles.cardMateriaPrima}>
                                <img
                                    src={iconsInatu[nomeA]}
                                    className={styles.icon}
                                    alt={`Ícone de ${nomeB}`}
                                    style={{ width: "25px", height: "25px", marginRight: "10px" }}
                                />
                                <span onClick={() => selectCollect(nomeDataBase, iconsInatu[nomeA])}>{nomeB}</span>
                            </div>
                        ))}
                    </div>
                </div>
            }

            {!visivel && <AllCollects icon={icon} nome={collect} collection={collection}/>}
        </>
    );
};

export default ColetasRecebidas;
