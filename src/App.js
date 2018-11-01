import React, { Component } from 'react'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import PageNumbers from './components/PageNumbers'
import Buttons from './components/Buttons'
import './App.css'

const data = require('./countries.json')
class App extends Component {
  state = {
    availablePages: [1],
    currentPage: 1,

    name: '',
    email: '',
    validated: null,

    country: '',
    city: '',
  }

  changeCurrentPage = e => {
    if (this.state.availablePages.includes(+e.target.innerText)) {
      this.setState({ currentPage: +e.target.innerText })
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    e.target.name === 'email' && this.setState({ validated: null })
  }

  changePageWithButton = e => {
    const emailValidating = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    e.target.name === 'next' && emailValidating.test(this.state.email)
      ? this.setState({
          validated: true,
          currentPage: this.state.currentPage + 1,
          availablePages: [
            ...this.state.availablePages,
            this.state.currentPage + 1,
          ],
          currentEmail: this.state.email,
        })
      : this.setState({ validated: false })
    e.target.name === 'prev' &&
      this.state.currentPage > 1 &&
      this.setState({ currentPage: this.state.currentPage - 1 })
  }

  getCountryName = e => {
    // for(let key in data)
  }

  render() {
    return (
      <div className="main-wrapper">
        <PageNumbers
          current={this.state.currentPage}
          changeCurrentPage={this.changeCurrentPage}
        />
        {this.state.currentPage === 1 ? (
          <First
            handleChange={this.handleChange}
            name={this.state.name}
            email={this.state.email}
            validated={this.state.validated}
          />
        ) : (
          ''
        )}
        {this.state.currentPage === 2 ? (
          <Second
            handleChange={this.handleChange}
            city={this.state.city}
            country={this.state.country}
            getCountryName={this.getCountryName}
          />
        ) : (
          ''
        )}
        {/* {this.state.currentPage === 3 ? <Third /> : ''}
        {this.state.currentPage === 4 ? <Fourth /> : ''}  */}
        <Buttons
          changeCurrentPage={this.changePageWithButton}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default App
