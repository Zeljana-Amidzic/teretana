import './App.css';

import { Link, Route, Router, Routes } from 'react-router-dom';
import { Navbar, Proizvodi, Korisnici, HomePage, Registracija, Prijava, Vezbe, Clanarine, Planovi, Korisnik } from './components';
import { render } from 'react-dom';
import { Component } from 'react';
import authService from './services/auth-service';

function App(){
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/registracija' element={<Registracija/>} />
        <Route path='/prijava' element={<Prijava/>} />
        <Route path='/korisnici' element={<Korisnici/>} />
        <Route path='/proizvodi' element={<Proizvodi/>} />
        <Route path='/planovi' element={<Planovi/>} />
        <Route path='/vezbe' element={<Vezbe/>} />
        <Route path='/clanarine' element={<Clanarine/>} />
        <Route path='/profil' element={<Korisnik/>} />
      </Routes>
    </div>
  )
}

export default App;
