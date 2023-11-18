import React from 'react';
import './Places.scss';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  // ComboboxOptionText,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

const Places = ({ onSetLocation }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val) => {
    onSetLocation(val, false);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    onSetLocation({ lat, lng });
  };

  console.log(status, data);

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='combobox-input'
        placeholder='Search for shelter'
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => {
              return (
                <ComboboxOption
                  key={place_id}
                  value={description}
                />
              );
            })}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default Places;
