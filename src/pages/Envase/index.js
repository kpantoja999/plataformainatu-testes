import { useParams } from "react-router-dom";
import FormEnvase from "../../Components/Forms/FormEnvase";
import NavBar from "../../Components/NavBar";
import { useEffect, useState } from "react";
import http from "../../Components/http";

export default function Envase() {
    const { id } = useParams();
    const [processo, setProcesso] = useState({});
    const [depreciacao, setDepreciacao] = useState(0);
    const [energia, setEnergia] = useState(0);
    const [maoDeObra, setMaoDeObra] = useState(0);
    const [materiaPrima, setMateriaPrima] = useState(0);

    useEffect(() => {
        http.get(`processos/${id}`).then(res => {
            setProcesso(res.data)
        });
        http.get('gastosProdutivos').then(res => {
            res.data.map(item => {
                if (item.processo_id == id) {
                    setDepreciacao(prevDepreciacao => prevDepreciacao + item.depreciacao);
                    setEnergia(prevEnergia => prevEnergia + item.energia);
                    setMaoDeObra(prevMaoDeObra => prevMaoDeObra + item.mao_de_obra);
                    setMateriaPrima(item.valor_materia_prima);
                }
            })
        })
    }, [])

    return (
        <>
            <NavBar />
            <FormEnvase
                processo={processo}
                depreciacao={depreciacao}
                energia={energia}
                maoDeObra={maoDeObra}
                materiaPrima={materiaPrima}
            />
        </>
    )
}