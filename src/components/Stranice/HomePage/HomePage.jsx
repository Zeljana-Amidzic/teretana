import React, { Component } from 'react';
import Cards from '../../Cards';
import FirstSection from '../../FirstSection';
import Footer from '../../Footer';

function HomePage() {
    return (
      <>
          <FirstSection/>
          <Cards/>
          <Footer />
      </>
    );
}

export default HomePage;