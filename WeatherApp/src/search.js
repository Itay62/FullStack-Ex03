import React, { useState } from 'react';
import Weather from './Weather';

function WeatherSearch() {
  const [city, setCity] = useState('');
  const [searchInput, setSearchInput] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (searchInput) {
        setCity(searchInput);
    }
  }

  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder ="New York" id="cityInput" value={searchInput} onChange={handleInputChange} className='form-input'/>
        <button type="submit" className='form-submit-btn'>Search</button> &#x1F50D;
      </form>
      <Weather city={city} />
    </div>
  );
}

export default WeatherSearch;