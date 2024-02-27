import React from 'react';
import './style.css';

import logoInatu from './public/logo-inatu@2x.png';
import vectorIcon from './public/vector.svg';
import rosivaldoIcon from './public/rosivaldo.svg';
import rdsIcon from './public/rds.svg';
import apadritIcon from './public/apadrit.svg';
import apfovIcon from './public/apfov.svg';
import logoasagaIcon from './public/logoasaga2.svg';
import aspacsIcon from './public/aspacs.svg';
import ilcIcon from './public/ilc.svg';
import idesamIcon from './public/idesam.svg';
import frame4Icon from './public/frame-4@2x.png';
import vector1Icon from './public/vector1.svg';
import gearsIcon from './public/gears.svg';
import vector2Icon from './public/vector2.svg';
import tabsIcon from './public/tabs.svg';
import vector3Icon from './public/vector3.svg';
import paperIcon from './public/paper.svg';

const LandPage = () => {
  return (
    <>
      <article className="lp-desktop-teste">
        <section className="section-1">
          <nav className="head">
            <img className="logo-inatu-icon" alt="" src={logoInatu} />
            <nav className="links">
              <nav className="links-txt">
                <a className="recursos" data-scroll-to="recursos" id="recursos">
                  <h4 className="recursos1">Recursos</h4>
                </a>
                <div className="sobre-ns">
                  <h5 className="recursos1">Sobre nós</h5>
                </div>
              </nav>
              <button className="cta-1" id="cta1">
                <b className="entrar">Entrar</b>
              </button>
            </nav>
          </nav>
          <div className="main-content">
            <div className="text">
              <div className="main-txt">
                <div className="title">
                  <h1 className="plataforma-inat-amazônia-container">
                    <p className="plataforma-inat">Plataforma Inatú</p>
                    <p className="plataforma-inat">Amazônia</p>
                  </h1>
                  <div className="line">
                    <img className="vector-icon" alt="" src={vectorIcon} />
                  </div>
                </div>
                <p className="o-sistema-de">
                  O Sistema de Gestão Produtiva da marca coletiva das comunidades da Amazônia.
                </p>
              </div>
              <button className="cta-2" id="cta2">
                <b className="entrar">Entrar</b>
              </button>
            </div>
            <div className="illus-rosivaldo">
              <img className="illus-icon" alt="" src={rosivaldoIcon} />
            </div>
          </div>
          <section className="assoc">
            <div className="title1">
              <b className="somos-a-união">Somos a união entre:</b>
            </div>
            <div className="associacoes slider">
              <img className="logo-rds-icon4" alt="" src={rdsIcon} style={{ height: '90px', width: '152px' }} />
              <img className="logo-apadrit-icon4" alt="" src={apadritIcon} style={{ height: '90px' }} />
              <img className="logo-apfov-icon3" alt="" src={apfovIcon} style={{ height: '90px' }} />
              <img className="logo-asaga-icon3" alt="" src={logoasagaIcon} style={{ height: '90px' }} />
              <img className="logo-aspacs-icon2" alt="" src={aspacsIcon} style={{ height: '90px' }} />
              <img className="logo-ilc-icon2" alt="" src={ilcIcon} style={{ height: '90px' }} />
              <img className="logo-idesam-icon2" alt="" src={idesamIcon} style={{ height: '80px' }} />
            </div>
          </section>
          <section className="section-2" id="Beneficios">
            <img className="section-2-child" alt="" src={frame4Icon} />
            <h2 className="todos-os-dados">
              Todos os dados produtivos de ponta a ponta, agora na segurança da rede
            </h2>
            <div className="content">
              <div className="illus-g1-parent">
                <div className="illus-g1">
                  <img className="bg-g2-icon" alt="" src={frame4Icon} />
                  <img className="vector-icon1" alt="" src={vector1Icon} />
                  <img className="gears-icon" alt="" src={gearsIcon} />
                </div>
                <h3 className="gestão-administrativa">Gestão administrativa</h3>
                <div className="funcionários-maquinário-e">
                  Funcionários, maquinário e demais despesas podem ser ajustados a qualquer momento
                </div>
              </div>
              <div className="illus-g2-parent">
                <div className="illus-g1">
                  <img className="bg-g2-icon" alt="" src={frame4Icon} />
                  <img className="vector-icon1" alt="" src={vector2Icon} />
                  <img className="tabs-icon" alt="" src={tabsIcon} />
                </div>
                <h3 className="gestão-administrativa">Gestão produtiva</h3>
                <p className="cada-etapa-de">Cada etapa de fabricação pode ser anotada em formulários feitos sob medida</p>
              </div>
              <div className="illus-g3-parent">
                <div className="illus-g1">
                  <img className="bg-g2-icon" alt="" src={frame4Icon} />
                  <img className="vector-icon1" alt="" src={vector3Icon} />
                  <img className="paper-icon" alt="" src={paperIcon} />
                </div>
                <h3 className="gestão-administrativa">Rastreabilidade</h3>
                <p className="cada-etapa-de">Organize o seu produto final para ser vendido por lotes gerados dentro da plataforma</p>
              </div>
            </div>
          </section>
        </section>
      </article>
    </>
  );
};

export default LandPage;
