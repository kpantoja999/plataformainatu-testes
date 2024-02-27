import './style.css'
import { Link } from 'react-router-dom'

export default function SectionAlinharVertical({children, title}) {
    return(
        <section className='container-alinhar-na-vertical'>

            <div className='containerTitle'>
                <h1 id="text-processos">{title}</h1>
                <Link className='linkControleProcessos' to={'/controleProcessos'}>Controle de Processos</Link>
            </div>

            {children}
            
        </section>
    )
}