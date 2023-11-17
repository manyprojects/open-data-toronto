import React from 'react';
import './HomePage.scss';
import AccordionComponent from '../AccordionComponent/AccordionComponent';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';

const HomePage = () => {
  return (
    <>
      {/* HEADER */}
      <header className='header'>
        <a href='/'>
          <img
            className='header__logo'
            src='https://open.toronto.ca/wp-content/themes/wp-open-data-toronto/img/logo.svg'
            alt='TORONTO'
          />
        </a>
      </header>

      {/* main nav */}
      <Nav />

      {/* MAIN CONTENT */}
      <main className='main'>
        {/* sidebar */}
        <Sidebar />

        <section className='main__content'>
          <h1 className='main__title'>
            Daily Shelter & Overnight Service Occupancy & Capacity
          </h1>

          <AccordionComponent />
        </section>
      </main>
    </>
  );
};

export default HomePage;
