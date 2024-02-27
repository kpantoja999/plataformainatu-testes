import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar'
import { useEffect, useState } from 'react';
import http from '../../Components/http';
import FormProcesso from '../../Components/Forms/FormProcesso';
import { verificaProcesso } from '../../js/controleProcessos';

export default function Processamento() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [processoPendente, setProcessoPendente] = useState('');
    const [processo, setProcesso] = useState({});
    const [maquinas, setMaquinas] = useState([]);
    const [colaboradores, setColaboradores] = useState([]);

    useEffect(() => {
        http.get(`processos/${id}`).then(res => {
            setProcesso(res.data);
            const pendente = verificaProcesso(res.data);
            setProcessoPendente(pendente);
            if (pendente === 'envase'){ navigate(`/envase/${id}`) }; 
        });

        http.get('maquinas').then(res => {
            setMaquinas(res.data)
        });

        http.get('funcionarios').then(res => {
            setColaboradores(res.data)
        })
    }, []);

    return (
        <>
            <NavBar />
            <FormProcesso 
                etapa={processoPendente} 
                dadosProcesso={processo}
                maquinas={maquinas}
                colaboradores={colaboradores}
            />
        </>
    );
}
