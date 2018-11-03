import React, { Component } from 'react'
import Buttons from '../Buttons'

import './Second.scss'

class Second extends Component {
  render() {
    const {
      handleCountryChange,
      handleCityChange,
      country,
      city,
      countryArray,
      citiesArray,
      cityIsValid,
      countryIsValid,
      setCountryWithClick,
      setCityWithClick,
      handleClickNextPage,
      handleClickPrevPage,
    } = this.props
    return (
      <div className="second-page">
        <p>2. Выберите страну и город</p>
        <div className="input-country-search">
          <input
            onClick={handleCountryChange}
            type="search"
            placeholder="Страна..."
            value={country}
            onChange={handleCountryChange}
            name="country"
            className={countryIsValid === false ? 'error' : ''}
          />
          {countryArray && (
            <ul className="countries-search">
              {countryArray.map((country, index) => (
                <li
                  key={country + '_country'}
                  id={index + '_country'}
                  onClick={setCountryWithClick}
                >
                  {country}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="input-city-search">
          <input
            onClick={handleCityChange}
            type="search"
            placeholder="Город..."
            value={city}
            onChange={handleCityChange}
            name="city"
            className={cityIsValid === false ? 'error' : ''}
          />
          {citiesArray && (
            <ul className="city-search">
              {citiesArray.map((city, index) => (
                <li
                  key={index + '_city'}
                  id={index + '_city'}
                  onClick={setCityWithClick}
                >
                  {city.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Buttons
          handleClickNextPage={handleClickNextPage}
          handleClickPrevPage={handleClickPrevPage}
        />
      </div>
    )
  }
}

export default Second
