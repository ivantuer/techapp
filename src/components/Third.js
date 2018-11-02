import React, { Component } from 'react'

class Third extends Component {
  state = {}
  render() {
    return (
      <div className="third-page">
        <p>3. Отметьте социальные сети</p>

        <div className="face">
          <input type="checkbox" />
          <label htmlFor="">Facebook</label>
        </div>
        <div className="vk">
          <input type="checkbox" />
          <label htmlFor="">Вконтакте</label>
        </div>

        <div className="twit">
          <input type="checkbox" />
          <label htmlFor="">Twitter</label>
        </div>

        <div className="ok">
          <input type="checkbox" />
          <label htmlFor="">Одноклассники</label>
        </div>
      </div>
    )
  }
}

export default Third
