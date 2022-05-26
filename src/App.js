import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Navbar, Proizvodi, Korisnici, HomePage, Registracija, Prijava, Vezbe, Clanarine, Planovi } from './components';
import { render } from 'react-dom';
import { Component } from 'react';

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
      </Routes>
    </div>
  )
}

export default App;
