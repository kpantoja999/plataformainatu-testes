import NavBar from "../../Components/NavBar";
import CardEscolheProcesso from "../../Components/Cards/CardEscolheProcesso";
import './style.css'
import SectionAlinharVertical from "../../Components/SectionAlinharVertical";


export default function Processos() {

    const nomesProcesso = [
        { id: 'copaiba', processo: 'Copaíba' },
        { id: 'cafe verde', processo: 'Café Verde' },
        { id: 'pataua', processo: 'Patauá' },
        { id: 'cacau', processo: 'Cacau' },
        { id: 'buriti', processo: 'Buriti' },
        { id: 'açai', processo: 'Açaí' },
        { id: 'citronela', processo: 'Cítronela' },
        { id: 'breu', processo: 'Breu' },
        { id: 'castanha', processo: 'Castanha' }
    ];

    return (
        <>
            <NavBar />
            <SectionAlinharVertical title='Escolha o item a ser processado ou click em'>
                <CardEscolheProcesso nomesProcesso={nomesProcesso} />
            </SectionAlinharVertical>
        </>
    )
}