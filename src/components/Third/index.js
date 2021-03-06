import React from 'react'
import Buttons from '../Buttons'
import { linkValidate } from '../../utils/validation'
import './Third.scss'

const Third = ({
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
}) => {
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
            className={socialError && !linkValidate(faceInput) ? 'error' : ''}
            type="text"
            name="faceInput"
            placeholder="Ваша страница в Facebook"
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
            className={socialError && !linkValidate(vkInput) ? 'error' : ''}
            type="text"
            name="vkInput"
            placeholder="Ваша страница в Vk"
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
            className={socialError && !linkValidate(twitInput) ? 'error' : ''}
            type="text"
            name="twitInput"
            placeholder="Ваша страница в Twitter"
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
            className={socialError && !linkValidate(okInput) ? 'error' : ''}
            type="text"
            name="okInput"
            placeholder="Ваша страница в Ok"
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

export default Third
