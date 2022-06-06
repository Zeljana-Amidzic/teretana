import './App.css';

import { Link, Route, Router, Routes } from 'react-router-dom';
import { Navbar, Prodavnica, Korisnici, HomePage, Registracija, Prijava, Vezbe, Clanarine, Planovi, Korisnik, Proizvodi } from './components';
import { render } from 'react-dom';
import React, { useEffect, useState } from 'react';
import authService from './services/auth-service';
import UpdateProizvod from './components/Proizvodi/Proizvod/UpdateProizvod';

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/registracija' element={<Registracija/>} />
          <Route path='/prijava' element={<Prijava/>} />
          <Route path='/korisnici' element={<Korisnici/>} />
          <Route path='/prodavnica' element={<Prodavnica/>} />
          <Route path='/planovi' element={<Planovi/>} />
          <Route path='/vezbe' element={<Vezbe/>} />
          <Route path='/clanarine' element={<Clanarine/>} />
          <Route path='/profil' element={<Korisnik/>} />
          <Route path='/proizvodi' element={<Proizvodi/>} />
          <Route path='/updateproizvod/:idproizvod' element={<UpdateProizvod/>} />
        </Routes>
      </div>
  )
}

export default App;
