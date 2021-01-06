import React from 'react'

const Weather = ({ city_name, sunrise, sunset, temp, state_code, weather, units }) => {

    return <div className="weather_container">
        <h1 id='location'>{city_name}, {state_code}</h1>
        <h2 id='date'><label>Date:</label> {new Date().toDateString()}</h2>
        <h3 id='sunrise'><label>Sunset:</label> {sunrise}</h3>
        <h3 id='sunset'><label>Sunrise:</label> {sunset}</h3>
        <h2 id='temperature'>{temp}&deg; {(units === 'I') ? "F" : "C"} </h2>
        <h3 id='weather'><label>Weather:</label>  {weather.description}</h3>
        <h3 id='icon'><img alt='weather_icon' src={'https://www.weatherbit.io/static/img/icons/' + weather.icon + '.png'} /></h3>
    </div>
}

export default Weather;