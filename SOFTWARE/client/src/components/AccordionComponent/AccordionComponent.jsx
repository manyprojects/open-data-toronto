import React from 'react';
import Map from '../Map/Map';
import Accordion from 'react-bootstrap/Accordion';

const AccordionComponent = () => {
  return (
    <Accordion className='accordion'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>OVERVIEW</Accordion.Header>
        <Accordion.Body>
          <p className='overview__text'>
            This data set provides a daily list of active overnight shelter and
            allied services in the Shelter Support and Housing Administration
            division's Shelter Management Information System (SMIS) database.
            The data provides daily updated information about shelter and
            overnight service programs administered by SSHA including the
            program's operator, location, classification, occupancy and
            capacity. This reporting revises and updates the approach taken in
            the <a href='/'>Daily Shelter Occupancy data set</a>, starting with
            the current year data for 2021.
          </p>
          <p className='overview__text overview__text--sub1'>
            This new data set includes the following revisions:
          </p>

          <ul className='overview__list'>
            <li className='overview__item'>
              <span>Overnight service type</span>: The previous data set only
              reported on shelter programs, now all overnight service types
              where occupancy is tracked in SMIS are included.
            </li>
            <li className='overview__item'>
              {' '}
              <span>Capacity type</span>: Programs are categorized in this data
              set as having either bed based or room based capacity. Bed based
              capacity is typically applicable for programs with common sleeping
              areas, while room based capacity is typically applicable for
              family programs and hotel programs where sleeping rooms are not
              shared by people from different households. This change prevents
              over reporting of capacity in room based programs.
            </li>
            <li className='overview__item'>
              <span>Two measures of capacity:</span> his data set provides
              information about two measures of capacity. Funding capacity
              reports the number of beds or rooms that a program is intended to
              provide. This is also the capacity measure provided in the
              previous Daily Shelter Occupancy data set. There are a number of
              reasons why beds or rooms may be temporarily out of service,
              including maintenance, repairs, renovations, outbreaks or pest
              control, so a second capacity measure is also included in the
              reporting. Actual capacity reports the number of beds or rooms in
              service and showing as available for occupancy in the Shelter
              Management Information System at time of reporting. The previous
              data set reported only funding capacity, but actual capacity is a
              more effective capacity measure to assess program occupancy rates.
            </li>
          </ul>

          <h4>Definitions</h4>
          <p>
            Definitions for each field in the data set are provided under data
            features. Additional definitions about housing & homelessness
            services can be found in the Housing & Homelessness Services
            Glossary, which you can find on the{' '}
            <a href='/'>Housing Stability Service System Overview</a> web page.
          </p>

          <h4>Limitations</h4>
          <p>
            This is unaudited data compiled directly from an administrative
            database. Data reflect only the state of each program's records in
            the database and may not always accurately reflect the actual
            current situation in each program.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Map />

      <Accordion.Item eventKey='1'>
        <Accordion.Header>DATA FEATURES</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>DATA QUALITY</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>DOWNLOAD DATA</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='4'>
        <Accordion.Header>EXPLORE DATA</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='5'>
        <Accordion.Header>FOR DEVELOPERS</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionComponent;
