import React, { Component } from 'react'
import First from '../../components/First'
import Second from '../../components/Second'
import Third from '../../components/Third'
import Fourth from '../../components/Fourth'
import PageNumbers from '../../components/PageNumbers'

import './MainComponent.scss'

import countriesData from '../../utils/countries.json'
import citiesData from '../../utils/cities.json'
import { validate } from '../../utils/validation'
import {
  FIRST_STEP,
  SECOND_STEP,
  THIRD_STEP,
  FOURTH_STEP,
  steps,
} from './constants'

class MainComponent extends Component {
  state = {
    availablePages: [1, 4],
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
    this.setState({ country: e.target.value })
    this.getCountryName(e)
  }

  handleCityChange = e => {
    this.setState({ city: e.target.value })
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
      console.log(1)
      city !== '' && country !== ''
        ? this.setState({
            cityIsValid: city !== '',
            countryIsValid: country !== '',
            currentPage: currentPage + 1,
            availablePages: [...availablePages, currentPage + 1],
          })
        : this.setState({
            cityIsValid: city !== '',
            countryIsValid: country !== '',
          })
    }
    if (currentPage === 3) {
      if (
        !!vkInput === !!vk &&
        !!okInput === !!ok &&
        !!twitInput === !!twit &&
        !!faceInput === !!face
      ) {
        this.setState({
          currentPage: currentPage + 1,
          availablePages: [...availablePages, currentPage + 1],
        })
      } else this.setState({ socialError: true })
    }
    if (currentPage === 4) {
      console.log('safsdfs')
      if (currentImage === 'dog-4') {
        this.setState({ animalError: true })
      } else {
        this.setState({
          animalError: false,
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
        cityAutoComplete.name.includes(e.target.value)
      )
    })
    this.setState({ citiesArray })
  }

  handleCheckbox = e => {
    this.setState({ [e.target.name]: !this.state[e.target.name] })
  }
  handleSocial = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleImageClick = e => {
    this.setState({ currentImage: e.target.alt })
  }

  render() {
    const {
      currentPage,
      name,
      email,
      validated,
      city,
      country,
      countryArray,
      citiesArray,
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
    } = this.state
    const currentStep = steps[currentPage]

    return (
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
          />
        )}
      </div>
    )
  }
}

export default MainComponent
