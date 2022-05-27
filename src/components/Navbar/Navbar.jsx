import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TWS
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Početna
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/prijava'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Ulogujte se
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/proizvodi'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Prodavnica
              </Link>
            </li>

            <li>
              <Link
                to='/registracija'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Registracija
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Registracija</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;