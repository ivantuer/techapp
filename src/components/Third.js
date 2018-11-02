import React, { Component } from 'react'
import './Third.scss'

class Third extends Component {
  state = {
    face: false,
    vk: false,
    twit: false,
    ok: false,
  }
  changeChecked = e => {
    this.setState({
      [e.target.name]: !this.state[e.target.name],
    })
  }
  render() {
    return (
      <div className="third-page">
        <p>3. Отметьте социальные сети</p>

        <div className="social">
          <div className="social-name">
            <input name="face" type="checkbox" onClick={this.changeChecked} />
            <label htmlFor="face">Facebook</label>
          </div>
          {this.state.face && <input type="text" name="faceLink" />}
        </div>
        <div className="social">
          <div className="social-name">
            <input name="vk" type="checkbox" onClick={this.changeChecked} />
            <label htmlFor="vk">Вконтакте</label>
          </div>
          {this.state.vk && <input type="text" name="vkLink" />}
        </div>

        <div className="social">
          <div className="social-name">
            <input name="twit" type="checkbox" onClick={this.changeChecked} />
            <label htmlFor="twit">Twitter</label>
          </div>
          {this.state.twit && <input type="text" name="twitLink" />}
        </div>

        <div className="social">
          <div className="social-name">
            <input name="ok" type="checkbox" onClick={this.changeChecked} />
            <label htmlFor="ok">Одноклассники</label>
          </div>
          {this.state.ok && <input type="text" name="okLink" />}
        </div>
      </div>
    )
  }
}

export default Third
