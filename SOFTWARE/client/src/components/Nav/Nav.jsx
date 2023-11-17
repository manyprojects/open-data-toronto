import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__list__item'>
          <a
            className='nav__link nav__link--first'
            href=''
          >
            OPEN DATA
          </a>
        </li>

        <li className='nav__list__item'>
          <a
            className='nav__link'
            href=''
          >
            Data Catalogue
          </a>
        </li>

        <li className='nav__list__item'>
          <a
            className='nav__link'
            href=''
          >
            Knowledge Centre
          </a>
        </li>

        <li className='nav__list__item'>
          <a
            className='nav__link'
            href=''
          >
            About
          </a>
        </li>

        <li className='nav__list__item'>
          <a
            className='nav__link'
            href=''
          >
            Gallery
          </a>
        </li>

        <li className='nav__list__item'>
          <a
            className='nav__link'
            href=''
          >
            Contact
          </a>
        </li>
      </ul>

      <div className='search-container'>
        <input
          className='nav__search'
          type='search'
          placeholder='Search'
        />
        <button className='nav__button'>SEARCH</button>
      </div>
    </nav>
  );
};

export default Nav;
