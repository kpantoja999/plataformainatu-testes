import img1 from '../../../assets/img/paper.svg';
import img2 from '../../../assets/img/gears.svg';
import './style.css';
import { Link } from 'react-router-dom';

export default function CardsControlesProcesso() {
    return (
        <div className="divEscolheEtapa" >
            
            <Link className="selecionarLoteDeEntrada" to='/selecionarLote'>
                <img src={img1} />
                <h1>Selecionar lote de entrada</h1>
            </Link>

            <Link className="continuarProcesso" to='/continuarProcesso'>
                <img src={img2} />
                <h1>Continuar Processo</h1>
            </Link>
        </div>
    )
}