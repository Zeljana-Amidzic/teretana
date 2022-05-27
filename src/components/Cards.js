import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import slika1 from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/cards.jpg";
import slika2 from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/online-shopping.jpeg";
import slika3 from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/vezba.jpg";
import slika4 from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/trener.jpg";
import slika5 from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/proizvodi.jpg";

function Cards() {
  return (
    <div className='cards'>
      <h1>Zavirite u pogodnosti koje Vam nudimo</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={slika1}
              text='Samostalno, sa bilo kog mesta, u bilo koje vreme produžite važenje članarine'
              label='Članarina'
              path='/clanarina'
            />
            <CardItem
              src={slika2}
              text='Kupite proizvode po povoljnijim cenama uz dostavu na kućnu adresu ili preuzimanje u teretani'
              label='eProdavnica'
              path='/proizvodi'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={slika3}
              text='Pregledajte vežbe i kupite odgovarajuće planove treninga'
              label='Plan treninga'
              path='/plan'
            />
            <CardItem
              src={slika4}
              text='Istražite naše trenere'
              label='Treneri'
              path='/zaposleni'
            />
            <CardItem
              src={slika5}
              text='Veći asortiman proizvoda u online prodavnici'
              label='Proizvodi'
              path='/proizvodi'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;