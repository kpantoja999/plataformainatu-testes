import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Processos from "../../pages/Processos";
import PrepararLoteDeEntrada from "../../pages/PrepararLoteDeEntrada";
import ControleProcessos from "../../pages/ControleProcessos";
import SelecionarLoteDeEntrada from "../../pages/SelecionarLoteDeEntrada";
import ContinuarProcesso from "../../pages/ContinuarProcesso";
import Processamento from '../../pages/Processamento';
import Envase from "../../pages/Envase";
import InfoProd from "../../pages/InfoProd";
import Lotes from "../../pages/Lotes";
import Cadastro from "../../pages/Cadastro";
import Coletas from "../../pages/Coletas";
import ColetasRecebidas from "../../pages/ColetasRecebidas";
import Associacoes from "../../pages/Associacoes";
import Login from '../../pages/Login';
import InfoLote from "../../pages/InfoLote";

export default function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Associacoes />} />
                <Route path="/login/:id" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/processos" element={<Processos />} />
                <Route path="/prepararLoteDeEntrada/:id" element={<PrepararLoteDeEntrada />} />
                <Route path="/controleProcessos" element={<ControleProcessos />} />
                <Route path="/selecionarLote" element={<SelecionarLoteDeEntrada />} />
                <Route path="/continuarProcesso" element={<ContinuarProcesso />} />
                <Route path="/processamento/:id" element={<Processamento />} />
                <Route path="/envase/:id" element={<Envase />} />
                <Route path="/lotes" element={<Lotes />} />
                <Route path="/infoProd/:id" element={<InfoProd />} />
                <Route path="/infoLote/:id/:name" element={<InfoLote/>} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/coletas" element={<Coletas />} />
                <Route path="/coletasRecebidas" element={<ColetasRecebidas />} />
            </Routes>
        </Router>
    );
}

