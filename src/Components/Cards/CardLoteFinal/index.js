import './style.css';
import { iconsInatu } from '../../../js/iconsMateriasPrimas';
import { valoresDaUsina } from '../../../js/padrão';
import { Link } from 'react-router-dom';
import { formatarData } from '../../../js/valueFormatter';
import QRCodeComponent from '../../QRcodeComponent';

import { TbInfoOctagonFilled } from "react-icons/tb";
import { FcStatistics } from "react-icons/fc";
import { MdQrCodeScanner } from "react-icons/md";
import { useEffect, useState } from 'react';

const config = [
  { name: 'ASAGA', baseURL: 'https://api.plataformainatu.com.br:4001/' },
  { name: 'ASPACS', baseURL: 'https://api.plataformainatu.com.br:5001/' },
  { name: 'APADRIT', baseURL: 'https://api.plataformainatu.com.br:6501/' },
  { name: 'APFOV', baseURL: 'https://api.plataformainatu.com.br:7001/' },
  { name: 'RDS', baseURL: 'https://api.plataformainatu.com.br:8001/' },
];

export default function CardLoteFinal({ lotes }) {
  const formataNomeProduto = (produto) => {
    return produto.replace(/ /g, '_');
  };

  const [association, setAssociation] = useState('');
  const [clickedCardId, setClickedCardId] = useState(null);

  useEffect(() => {
    const storedBaseURL = sessionStorage.getItem('baseURL');
    const itemConfig = config.find(item => item.baseURL === storedBaseURL);
    setAssociation(itemConfig?.name || '');
  }, []);

  return (
    <div>
      {lotes.map((lote) => {
        const isCardClicked = clickedCardId === lote.id;
        const usina = valoresDaUsina(lote.produto);
        const valorTotal = lote.quantidade * usina.valor;

        return (
          <div className='card-lote' key={lote.id}>
            <img id="img" src={iconsInatu[formataNomeProduto(lote.produto)]} alt={lote.produto} />
            <p id="produto" className="text">
              <span>{lote.produto}</span>
            </p>
            <p id="data" className="text">
              <span>{formatarData(lote.createdAt)}</span>
            </p>

            <div className='subDivisor'>
              <p id="associacao" className="text">{association}</p>
              <p id="quantidade" className="text">
                <span>{lote.quantidade}</span> Kg
              </p>
            </div>

            <div>
              <p id="valor" className="text">
                Valor L: R$ <span>{usina.valor}</span>
              </p>
              <p id="total" className="text">
                Valor total: R$ <span>{valorTotal}</span>
              </p>
            </div>

            <div className='links-lote-final'>
              <Link to={`https://page-info-azure.vercel.app/?id=${lote.id}&name=${association.toLowerCase()}`}>
                <TbInfoOctagonFilled style={{ color: 'black' }} />
              </Link>
              <Link to={`/infoProd/${lote.id}`} state={{ lote }}>
                <FcStatistics style={{ color: 'black' }} />
              </Link>
              <Link onClick={() => setClickedCardId(lote.id)}>
                <MdQrCodeScanner style={{ color: 'black' }} />
              </Link>
            </div>
            {isCardClicked && <QRCodeComponent value={`https://page-info-azure.vercel.app/?id=${lote.id}&name=${association.toLowerCase()}`} />}
          </div>
        );
      })}
    </div>
  );
}
