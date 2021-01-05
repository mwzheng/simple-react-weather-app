import React from 'react'

const Weather = ({ city_name, sunrise, sunset, temp , state_code}) => {
    return <div className="weather_container">
        <h1 id='location'>{city_name}, {state_code}</h1>
        <h2 id='date'>Date: {new Date().toDateString()}</h2>
        <text id='sun'>{`Sunset: ${sunrise}   ${'    '}   Sunrise: ${sunset}`}</text>
        <h2 id='temperature'>{temp}&deg;</h2>
        <h3 id='weather'>Weather</h3>
    </div>
}

export default Weather;