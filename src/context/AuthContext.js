// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseAuth from '../services/firebaseConfig';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [associacao, setAssociacao] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [cont, setCont] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const selectAssoc = (http) => {
    setAssociacao(http)
  }

  const selectCont = (num) => {
    setCont(num);
  }

  const value = {
    user,
    loading,
    login,
    signOut: () => {
      signOut(firebaseAuth);
    },
    associacao,
    selectAssoc,
    cont,
    selectCont,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};






