import { useContext, useEffect, useState } from "react";
import CardLoteFinal from "../../Components/Cards/CardLoteFinal";
import NavBar from "../../Components/NavBar";
import http from '../../Components/http';

export default function Lotes() {
    const [lotes, setlotes] = useState([]);

    useEffect(() => {
        http.get('loteFinal').then(res => {
            setlotes(res.data)
            console.log(res.data)
        }).catch(error => {
            alert(error)
        });
    }, [])

    return(
        <>
            <NavBar/>
            <CardLoteFinal lotes={lotes}/>
        </>
    )
}