import NavBar from '../../Components/NavBar';
import CabecalhoColetas from '../../Components/CabecalhoColetas';
import { useState } from 'react';
import FormColeta from '../../Components/Forms/FormColeta';
import './style.css'

const Coletas = () => {
    const [click, setClick] = useState(false);

    const mostrarform = () => {
        setClick(true);
    }

    return (
        <>
            <NavBar />
            <CabecalhoColetas mostrarform={mostrarform} />
            {click ? <FormColeta /> : ''}
        </>
    )
}

export default Coletas;