import React, { Component } from 'react'
import Buttons from '../Buttons'

import './Third.scss'

class Third extends Component {
  render() {
    const {
      vk,
      ok,
      face,
      twit,
      vkInput,
      okInput,
      faceInput,
      twitInput,
      socialError,
      handleCheckbox,
      handleSocial,
      handleClickNextPage,
      handleClickPrevPage,
    } = this.props
    return (
      <div className="third-page">
        <p>3. Отметьте социальные сети</p>

        <div className="social">
          <div className="social-name">
            <input
              name="face"
              type="checkbox"
              checked={face}
              onChange={handleCheckbox}
            />
            <label htmlFor="face">Facebook</label>
          </div>
          {face && (
            <input
              className={socialError && faceInput === '' ? 'error' : ''}
              type="text"
              name="faceInput"
              value={faceInput}
              onChange={handleSocial}
            />
          )}
        </div>
        <div className="social">
          <div className="social-name">
            <input
              name="vk"
              type="checkbox"
              checked={vk}
              onChange={handleCheckbox}
            />
            <label htmlFor="vk">Вконтакте</label>
          </div>
          {vk && (
            <input
              className={socialError && vkInput === '' ? 'error' : ''}
              type="text"
              name="vkInput"
              value={vkInput}
              onChange={handleSocial}
            />
          )}
        </div>

        <div className="social">
          <div className="social-name">
            <input
              name="twit"
              type="checkbox"
              checked={twit}
              onChange={handleCheckbox}
            />
            <label htmlFor="twit">Twitter</label>
          </div>
          {twit && (
            <input
              className={socialError && twitInput === '' ? 'error' : ''}
              type="text"
              name="twitInput"
              value={twitInput}
              onChange={handleSocial}
            />
          )}
        </div>

        <div className="social">
          <div className="social-name">
            <input
              name="ok"
              type="checkbox"
              checked={ok}
              onChange={handleCheckbox}
            />
            <label htmlFor="ok">Одноклассники</label>
          </div>
          {ok && (
            <input
              className={socialError && okInput === '' ? 'error' : ''}
              type="text"
              name="okInput"
              value={okInput}
              onChange={handleSocial}
            />
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

export default Third
