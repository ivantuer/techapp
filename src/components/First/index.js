import React, { Component } from 'react'
import Buttons from '../Buttons'
import './First.scss'
class Input extends Component {
  render() {
    const {
      name,
      nameIsValid,
      email,
      handleNameChange,
      handleEmailChange,
      validated,
      handleClickNextPage,
      handleClickPrevPage,
    } = this.props
    return (
      <div className="first-page">
        <p>1. Введите имя и e-mail</p>

        <div className="name">
          <input
            style={
              nameIsValid === false
                ? { border: '1px solid red' }
                : { border: 'none' }
            }
            type="text"
            placeholder="Ваше имя..."
            value={name}
            onChange={handleNameChange}
            name="name"
          />
          {nameIsValid === false && (
            <label htmlFor="name" className="error">
              - Введите ваше имя
            </label>
          )}
        </div>
        <div className="email">
          <input
            style={
              validated === false
                ? { border: '1px solid red' }
                : { border: 'none' }
            }
            type="email"
            placeholder="Ваш email..."
            value={email}
            onChange={handleEmailChange}
            name="email"
          />
          {validated === false && (
            <label htmlFor="email" className="error">
              - Проверьте ваш Email
            </label>
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

export default Input
