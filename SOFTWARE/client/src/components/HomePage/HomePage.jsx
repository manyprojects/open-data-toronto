import React from 'react';
import './HomePage.scss';
import AccordionComponent from '../AccordionComponent/AccordionComponent';

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

      {/* MAIN CONTENT */}
      <main className='main'>
        <section className='main__content'>
          <AccordionComponent />
        </section>
      </main>
    </>
  );
};

export default HomePage;
