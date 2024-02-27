import { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar'
import http from '../../Components/http'
import CardLoteDeEntrada from '../../Components/Cards/CardLoteDeEntrada';

export default function SelecionarLoteDeEntrada() {
    const [lotesEntrada, setlotesEntrada] = useState([]);
 
    useEffect(()=>{
        http.get('loteEntradas')
        .then(res=>{
            setlotesEntrada(res.data);
        })
    }, []);

    return (
        <>
            <NavBar/>
            <CardLoteDeEntrada lotesEntrada={lotesEntrada}/>
        </>
    )
}