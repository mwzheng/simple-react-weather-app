import './App.css';
import Weather from './component/weather'
import React, { useState } from 'react'
import API_OBJ from './api'

const base_url = API_OBJ.base;
const api_key = API_OBJ.key;

function App() {
  // Default search by city and imperial units
  const [searchQuery, setSearchQuerty] = useState('');
  const [searchBy, setSearchBy] = useState('city');
  const [units, setUnit] = useState('I');
  const [weather, setWeather] = useState({});

  const updateSearchBy = e => {
    setSearchBy(e.target.value);
  }

  const updateUnit = e => {
    setUnit(e.target.value);
  }

  const searchWeather = e => {
    if (e.key === "Enter") {
      fetch(`${base_url}city=${searchQuery}&country=us&units=${units}&key=${api_key}`)
        .then(res =>res.json())
        .then(result => {
          setWeather(result.data[0]);
          setSearchQuerty('');
        })
        .catch(error => console.log('Bad request: ' + error))
    }
  }

  const updateSearchQuery = e => {
    setSearchQuerty(e.target.value);
  }

  return (
    <div className="App">
      <div className='search_bar_container'>
        <select name="search_by" value={searchBy} onChange={updateSearchBy} id="select_search_by">
          <option value="city">City</option>
          <option value="zip_code">Zip Code</option>
        </select>
        <input id='searchBox'
          placeholder='Search for Location ...'
          value={searchQuery}
          onKeyPress={e => searchWeather(e)}
          onChange={e => updateSearchQuery(e)} ></input>
        <select name="unit" value={units} onChange={updateUnit} id="unit_type">
          <option value="metric">M</option>
          <option value="scientific">S</option>
          <option value="fahrenheit">I</option>
        </select>
      </div>
      {(typeof weather.city_name !== 'undefined') ? (<Weather {...weather} />) : ("")};
    </div>
  );
}

export default App;
