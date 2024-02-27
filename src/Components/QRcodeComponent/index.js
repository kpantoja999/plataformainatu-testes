import React from 'react';
import QRCode from 'qrcode.react';
import { toPng } from 'html-to-image';

function QRCodeComponent({ value }) {
  const downloadQRCode = () => {
    const qrCodeContainer = document.getElementById('qr-code-container');

    toPng(qrCodeContainer)
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'qrcode.png';
        link.click();
      })
      .catch(function (error) {
        console.error('Erro ao gerar o QR code como imagem:', error);
      });
  };

  return (
    <div>
      <div id="qr-code-container">
        <QRCode value={value} />
      </div>
      <button onClick={downloadQRCode}>Exportar QR Code</button>
    </div>
  );
}

export default QRCodeComponent;

