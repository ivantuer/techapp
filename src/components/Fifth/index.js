import React from 'react'
import './Fifth.scss'
import cat1 from '../../img/cat1.jpg'
import cat2 from '../../img/cat2.jpg'
import cat3 from '../../img/cat3.jpg'

const Fifth = ({
  name,
  email,
  city,
  country,
  currentImage,
  vk,
  face,
  twit,
  ok,
  vkInput,
  faceInput,
  twitInput,
  okInput,
  resetState,
}) => {
  return (
    <div className="fifth-page">
      <div className="visit-card">
        <div className="left-side">
          <div className="name-email">
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
          <p>
            {country}, {city}
          </p>

          <div>
            {vk && (
              <p>
                <span>Vk: </span>
                {vkInput}
              </p>
            )}
            {ok && (
              <p>
                <span>Ok: </span>
                {okInput}
              </p>
            )}
            {face && (
              <p>
                <span>Facebook: </span>
                {faceInput}
              </p>
            )}
            {twit && (
              <p>
                <span>Twitter: </span>
                {twitInput}
              </p>
            )}
          </div>
        </div>
        {currentImage === 'cat-1' && <img src={cat1} alt="" />}
        {currentImage === 'cat-2' && <img src={cat2} alt="" />}
        {currentImage === 'cat-3' && <img src={cat3} alt="" />}
      </div>
      <button onClick={resetState}>Пройти заново</button>
    </div>
  )
}

export default Fifth
