import React, { useEffect } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';

function OpenLayersMap({ coordinates }) {
  useEffect(() => {
    // Converte as coordenadas para o sistema de projeção do OpenLayers
    const center = fromLonLat(coordinates);

    // Cria um ponto com as coordenadas fornecidas
    const point = new Point(center);
    const pointFeature = new Feature(point);

    // Cria um estilo para o marcador
    const pointStyle = new Style({
      image: new Icon({
        src: '../../assets/icons_inatu/acai.svg', // Substitua pelo caminho da sua imagem de marcador
        scale: 0.5
      })
    });

    pointFeature.setStyle(pointStyle);

    // Cria uma fonte de vetor com a feature do ponto
    const vectorSource = new VectorSource({
      features: [pointFeature]
    });

    // Cria uma camada de vetor com a fonte do vetor
    const vectorLayer = new VectorLayer({
      source: vectorSource
    });

    // Inicializa o mapa
    const map = new Map({
      target: 'map-container', // ID do elemento HTML onde o mapa será renderizado
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: center,
        zoom: 12
      })
    });

    return () => {
      // Limpa o mapa quando o componente for desmontado
      map.setTarget(null);
    };
  }, [coordinates]);

  return <div id="map-container" style={{ width: '100%', height: '400px' }}></div>;
}

export default OpenLayersMap;
