import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/footer';
import Login from './components/pages/Login';
import Routes from './Routes';

import './App.css';
function App(){

  const [user, setUser] = useState(null);
const actionLoginDataGoogle = async (u) => {
  let NewUser ={
    id: u.uid,
    name: u.displayName,
    avatar: u.photoURL
  }

  setUser(NewUser);
}

  if(user === null){
    return(
      <Login  onReciveGoogle={actionLoginDataGoogle} /> 
    )
  }

  return(
        <BrowserRouter>
        <Header />

        <Routes />

        <Footer />

        </BrowserRouter >
  );
}
export default App;