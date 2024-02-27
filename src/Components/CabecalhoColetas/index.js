import { Link } from "react-router-dom";

const CabecalhoColetas = ({mostrarform}) => {
    return (
        <>
            <section>
                <h1>Coletas</h1>
                <div>
                    <button onClick={() => mostrarform()} className="bt">Receber coleta</button>
                    <Link to={"/coletasRecebidas"}><button className="bt">Coletas recebidas</button></Link>
                </div>
            </section>
        </>
    )
}

export default CabecalhoColetas;