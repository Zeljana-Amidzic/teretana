import React from 'react';
import { Button } from './Button';
import './FirstSection.css';

function FirstSection() {
  return (
    <div className='hero-container'>
      <h1>TERETANA SHOP</h1>
      <p>Pridruži nam se, šta čekaš?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ZAPOČNI
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          POGODNOSTI <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default FirstSection;