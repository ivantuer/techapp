import React, { Component } from 'react'
import './Second.scss'

class Second extends Component {
  render() {
    const {
      country,
      city,
      getCountryName,
      getCityName,
      countryArray,
      handleChange,
      setCountryWithClick,
      citiesArray,
      setCityWithClick,
    } = this.props
    return (
      <div className="first-page">
        <p>2. Выберите страну и город</p>
        <div className="input-country-search">
          <input
            type="search"
            placeholder="Select your country"
            value={country}
            onChange={handleChange}
            name="country"
          />
          {countryArray && (
            <ul className="countries-search">
              {countryArray.map(el => (
                <li
                  key={el.key + '_country'}
                  id={el.key + '_country'}
                  onClick={setCountryWithClick}
                >
                  {el.data}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="input-city-search">
          <input
            type="search"
            placeholder="Select Your City"
            value={city}
            onChange={handleChange}
            name="city"
          />
          {citiesArray && (
            <ul className="city-search">
              {citiesArray.map((el, index) => (
                <li
                  key={index + '_city'}
                  id={index + '_city'}
                  onClick={setCityWithClick}
                >
                  {el}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Second
