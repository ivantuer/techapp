import React, { Component } from 'react'

class Second extends Component {
  render() {
    const {
      country,
      city,
      getCountryName,
      getCityName,
      handleChange,
    } = this.props
    return (
      <div className="first-page">
        <p>2. Выберите страну и город</p>
        <input
          type="search"
          placeholder="Select your country"
          value={country}
          onChange={handleChange}
          name="name"
        />
        <div />
        <button onClick={getCountryName}>GET JSON</button>
        <input
          type="search"
          placeholder="Select Your City"
          value={city}
          onChange={handleChange}
          name="email"
        />
      </div>
    )
  }
}

export default Second
