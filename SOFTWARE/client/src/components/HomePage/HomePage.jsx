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

      {/* main nav s*/}
      <Nav />

      {/* MAIN CONTENT */}
      <main className='main'>
        {/* sidebar */}
        <Sidebar />

        <section className='main__content'>
          {/* <article className='about'> */}
          <h1 className='main__title'>
            Daily Shelter & Overnight Service Occupancy & Capacity
          </h1>

          {/* <p className='about__description'>
              This data set provides a daily list of active overnight shelter
              and allied services in the Shelter Support and Housing
              Administration division's Shelter Management Information System
              (SMIS) database. The data provides daily updated information about
              shelter and overnight service programs administered by SSHA
              including the program's operator, location, classification,
              occupancy and capacity. This reporting revises and updates the
              approach taken in the{' '}
              <a
                className='about__description__link'
                href='/'
              >
                Daily Shelter Occupancy data set
              </a>
              , starting with the current year data for 2021. This new data set
              includes the following revisions:
            </p> */}
          {/* </article> */}
          <AccordionComponent />
        </section>
      </main>
    </>
  );
};

export default HomePage;
