import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rotas from './Components/Routes';
import { AuthProvider } from './context/AuthContext';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { auth } from './services/firebaseConfig';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOms18qgXA-faZIX8h-48PZpY_oYUrFe8",
  authDomain: "inatu-6b21d.firebaseapp.com",
  projectId: "inatu-6b21d",
  storageBucket: "inatu-6b21d.appspot.com",
  messagingSenderId: "725432284119",
  appId: "1:725432284119:web:277005e6302db1f3541192",
  measurementId: "G-E41K5CKW7J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  </React.StrictMode>
);

