import React, { Component } from 'react'
import First from '../../components/First'
import Second from '../../components/Second'
import Third from '../../components/Third'
import Fourth from '../../components/Fourth'
import Fifth from '../../components/Fifth'

import PageNumbers from '../../components/PageNumbers'

import './MainComponent.css'

import countriesData from '../../utils/countries.json'
import citiesData from '../../utils/cities.json'
import { validate, linkValidate } from '../../utils/validation'
import {
  FIRST_STEP,
  SECOND_STEP,
  THIRD_STEP,
  FOURTH_STEP,
  FIFTH_STEP,
  steps,
} from './constants'

class MainComponent extends Component {
  state = {
    availablePages: [1],
    currentPage: 1,

    name: '',
    nameIsValid: null,
    email: '',
    validated: null,

    country: '',
    countryNumber: null,
    city: '',
    countryArray: [],
    citiesArray: [],
    cityIsValid: null,
    countryIsValid: null,

    face: false,
    vk: false,
    twit: false,
    ok: false,

    faceInput: '',
    vkInput: '',
    twitInput: '',
    okInput: '',

    currentImage: null,
  }

  changeCurrentPage = e => {
    if (this.state.availablePages.includes(+e.target.innerText)) {
      this.setState({ currentPage: +e.target.innerText })
    }
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value, nameIsValid: null })
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value, validated: null })
  }

  handleCountryChange = e => {
    this.setState({
      country: e.target.value,
      citiesArray: [],
      countryIsValid: null,
      availablePages: [1, 2],
    })
    this.getCountryName(e)
  }

  handleCityChange = e => {
    this.setState({
      city: e.target.value,
      cityIsValid: null,
      availablePages: [1, 2],
    })
    this.getCityName(e)
  }

  handleClickNextPage = e => {
    const {
      currentPage,
      availablePages,
      face,
      vk,
      twit,
      ok,

      countryNumber,

      faceInput,
      vkInput,
      twitInput,
      okInput,

      currentImage,
    } = this.state
    if (currentPage === 1) {
      const { name } = e.target
      const { email } = this.state
      validate(name, email) && this.state.name !== ''
        ? this.setState({
            validated: true,
            currentEmail: email,
            nameIsValid: this.state.name === '' ? false : true,
            currentPage: currentPage + 1,
            availablePages: [...availablePages, currentPage + 1],
          })
        : this.setState({
            validated: validate(name, email),
            nameIsValid: this.state.name === '' ? false : true,
          })
    }
    if (currentPage === 2) {
      const { city, country } = this.state
      const isCountryValid = Object.values(countriesData).some(
        el => el.toLowerCase() === country.toLowerCase()
      )
      const isCityValid = Object.values(citiesData).some(
        cityFromArray =>
          cityFromArray.country === countryNumber && cityFromArray.name === city
      )
      isCountryValid && isCityValid
        ? this.setState({
            cityIsValid: isCityValid,
            countryIsValid: isCountryValid,
            currentPage: currentPage + 1,
            availablePages: [...availablePages, currentPage + 1],
          })
        : this.setState({
            cityIsValid: isCityValid,
            countryIsValid: isCountryValid,
          })
    }
    if (currentPage === 3) {
      if (
        vk === linkValidate(vkInput) &&
        face === linkValidate(faceInput) &&
        ok === linkValidate(okInput) &&
        twit === linkValidate(twitInput)
      ) {
        this.setState({
          socialError: false,
          currentPage: currentPage + 1,
          availablePages: [...availablePages, currentPage + 1],
        })
      } else if (
        vk === false &&
        face === false &&
        ok === false &&
        twit === false
      ) {
        this.setState({
          socialError: false,
          currentPage: currentPage + 1,
          availablePages: [...availablePages, currentPage + 1],
        })
      } else this.setState({ socialError: true })
    }
    if (currentPage === 4) {
      if (currentImage === 'dog-4') {
        this.setState({ animalError: true })
      } else if (currentImage === null) {
        this.setState({ animalIsEmpty: true })
      } else {
        this.setState({
          animalError: false,
          animalIsEmpty: false,
          currentPage: currentPage + 1,
          availablePages: [...availablePages, currentPage + 1],
        })
      }
    }
  }

  handleClickPrevPage = () => {
    const { currentPage } = this.state
    if (currentPage > 1) this.setState({ currentPage: currentPage - 1 })
  }

  getCountryName = e => {
    let countryNumber = null
    const countries = Object.values(countriesData).filter((country, index) => {
      if (country.toLowerCase() === e.target.value.toLowerCase()) {
        countryNumber = index + 1
      }
      return (
        country.toLowerCase().includes(e.target.value.toLowerCase()) &&
        country !== e.target.value
      )
    })

    this.setState({
      countryArray: countries,
      countryNumber: countryNumber,
    })
  }

  setCountryWithClick = e => {
    const countryNumber = +e.target.id.split('_')[0] + 1
    this.setState({
      country: e.target.innerText,
      countryArray: [],
      citiesArray: [],

      countryNumber,
    })
  }
  setCityWithClick = e => {
    this.setState({
      city: e.target.innerText,
      citiesArray: [],
    })
  }

  getCityName = e => {
    const { countryNumber } = this.state
    const citiesArray = Object.values(citiesData).filter(cityAutoComplete => {
      return (
        cityAutoComplete.country === countryNumber &&
        cityAutoComplete.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      )
    })
    this.setState({ citiesArray })
  }

  handleCheckbox = e => {
    this.setState({
      [e.target.name]: !this.state[e.target.name],

      socialError: null,
    })
  }
  handleSocial = e => {
    this.setState({ [e.target.name]: e.target.value, socialError: null })
  }

  handleImageClick = e => {
    this.setState({
      currentImage: e.target.alt,
      animalIsEmpty: false,
      animalError: false,
    })
  }

  resetState = () => {
    this.setState({
      availablePages: [1],
      currentPage: 1,

      name: '',
      nameIsValid: null,
      email: '',
      currentEmail: '',
      validated: null,

      country: '',
      countryNumber: null,
      city: '',
      countryArray: [],
      citiesArray: [],
      cityIsValid: null,
      countryIsValid: null,

      face: false,
      vk: false,
      twit: false,
      ok: false,

      faceInput: '',
      vkInput: '',
      twitInput: '',
      okInput: '',

      currentImage: null,
      socialError: null,
      animalError: null,
      animalIsEmpty: null,
    })
  }

  render() {
    const {
      currentPage,
      name,
      email,
      currentEmail,
      validated,
      city,
      country,
      countryArray,
      citiesArray,
      cityIsValid,
      countryIsValid,
      vk,
      ok,
      face,
      twit,
      faceInput,
      vkInput,
      twitInput,
      okInput,
      currentImage,
      availablePages,
      nameIsValid,
      socialError,
      animalError,
      animalIsEmpty,
    } = this.state
    const currentStep = steps[currentPage]

    return currentStep !== FIFTH_STEP ? (
      <div className="main-wrapper">
        <PageNumbers
          availablePages={availablePages}
          current={currentPage}
          changeCurrentPage={this.changeCurrentPage}
        />
        {currentStep === FIRST_STEP && (
          <First
            handleNameChange={this.handleNameChange}
            handleEmailChange={this.handleEmailChange}
            name={name}
            nameIsValid={nameIsValid}
            email={email}
            validated={validated}
            handleClickNextPage={this.handleClickNextPage}
            handleClickPrevPage={this.handleClickPrevPage}
          />
        )}
        {currentStep === SECOND_STEP && (
          <Second
            handleCountryChange={this.handleCountryChange}
            handleCityChange={this.handleCityChange}
            country={country}
            city={city}
            countryArray={countryArray}
            citiesArray={citiesArray}
            setCountryWithClick={this.setCountryWithClick}
            setCityWithClick={this.setCityWithClick}
            handleClickNextPage={this.handleClickNextPage}
            handleClickPrevPage={this.handleClickPrevPage}
            cityIsValid={cityIsValid}
            countryIsValid={countryIsValid}
          />
        )}
        {currentStep === THIRD_STEP && (
          <Third
            vk={vk}
            ok={ok}
            face={face}
            twit={twit}
            vkInput={vkInput}
            faceInput={faceInput}
            twitInput={twitInput}
            okInput={okInput}
            socialError={socialError}
            handleCheckbox={this.handleCheckbox}
            handleSocial={this.handleSocial}
            handleClickNextPage={this.handleClickNextPage}
            handleClickPrevPage={this.handleClickPrevPage}
          />
        )}
        {currentStep === FOURTH_STEP && (
          <Fourth
            currentImage={currentImage}
            handleImageClick={this.handleImageClick}
            animalError={animalError}
            handleClickNextPage={this.handleClickNextPage}
            handleClickPrevPage={this.handleClickPrevPage}
            animalIsEmpty={animalIsEmpty}
          />
        )}
      </div>
    ) : (
      <div className="visit-wrapper">
        <Fifth
          name={name}
          email={currentEmail}
          city={city}
          country={country}
          currentImage={currentImage}
          faceInput={faceInput}
          vkInput={vkInput}
          okInput={okInput}
          twitInput={twitInput}
          resetState={this.resetState}
          vk={vk}
          ok={ok}
          face={face}
          twit={face}
        />
      </div>
    )
  }
}

export default MainComponent
