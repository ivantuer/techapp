import React, { Component } from 'react'
import './First.scss'
class Input extends Component {
  render() {
    const { name, email, handleChange, validated } = this.props
    return (
      <div className="first-page">
        <p>1. Введите имя и e-mail</p>
        <input
          type="text"
          placeholder="Your name..."
          value={name}
          onChange={handleChange}
          name="name"
        />
        <div className="email">
          <input
            style={
              validated === false
                ? { border: '1px solid red' }
                : { border: 'none' }
            }
            type="email"
            placeholder="Your email..."
            value={email}
            onChange={handleChange}
            name="email"
          />
          {validated === false && (
            <label htmlFor="email" className="error">
              -check your email
            </label>
          )}
        </div>
      </div>
    )
  }
}

export default Input
