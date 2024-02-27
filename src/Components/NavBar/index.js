import React from 'react';
import './style.css';
import logoInatu from '../../assets/img/logoInatu.svg';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <Link to="/home">
                <img src={logoInatu} alt="logo-inatu" className="logo" />
            </Link>
            <nav className="navbar">
                <Link to="/cadastro" className="link link-cadastro">Cadastros</Link>
                <Link to="/coletas" className="link link-coletas">Coletas</Link>
                <Link to="/processos" className="link link-processos">Processamento</Link>
                <Link to="/lotes" className="link link-lotes">Lotes</Link>
                <a href="#" className="link link-vendas">Vendas</a>
            </nav>
        </header>
    );
}
