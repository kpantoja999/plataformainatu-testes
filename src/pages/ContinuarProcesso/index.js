import { useEffect, useState } from 'react';
import CardContinuarProcesso from '../../Components/Cards/CardContinuarProcesso';
import NavBar from '../../Components/NavBar';
import SectionAlinharVertical from '../../Components/SectionAlinharVertical';
import http from '../../Components/http';

export default function ContinuarProcesso() {
    const [processos, setProcessos] = useState([]);

    useEffect(() => {
        http.get('processos').then(res => {
            setProcessos(res.data)
        })
    }, []);

    return (
        <>
            <NavBar />
            <SectionAlinharVertical title='Escolha o processo a ser continuado'>
                <CardContinuarProcesso processos={processos}/>
            </SectionAlinharVertical>
        </>
    )
}