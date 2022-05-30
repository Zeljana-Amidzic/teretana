import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const Sidebar = [
  {
    title: 'Početna',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Prodavnica',
    path: '/proizvodi',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Prijavi se',
    path: '/prijava',
    icon: <IoIcons.IoIosAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Profil',
    path: '/profil',
    icon: <IoIcons.IoIosPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Plan',
    path: '/plan',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Vežbe',
    path: '/vezbe',
    icon: <IoIcons.IoMdBicycle />,
    cName: 'nav-text'
  },
  {
    title: 'Članarine',
    path: '/clanarine',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Treneri',
    path: '/trener',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Korisnici',
    path: '/korisnici',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Registruj se',
    path: '/registracija',
    icon: <IoIcons.IoIosAdd />,
    cName: 'nav-text'
  }
];