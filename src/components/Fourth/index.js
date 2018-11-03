import React, { Component } from 'react'
import './Fourth.scss'
import Buttons from '../Buttons'
import cat1 from '../../img/cat1.jpg'
import cat2 from '../../img/cat2.jpg'
import cat3 from '../../img/cat3.jpg'
import dog4 from '../../img/dog4.jpg'

class Fourth extends Component {
  render() {
    const {
      handleClickNextPage,
      handleClickPrevPage,
      handleImageClick,
      currentImage,
      animalError,
    } = this.props
    return (
      <div className="fourth-page">
        <p>4. Выберите любимого котика</p>

        <div className="animals">
          <img
            className={currentImage === 'cat-1' ? 'currentImage' : ''}
            src={cat1}
            alt="cat-1"
            onClick={handleImageClick}
          />
          <img
            className={currentImage === 'cat-2' ? 'currentImage' : ''}
            src={cat2}
            alt="cat-2"
            onClick={handleImageClick}
          />
          <img
            className={currentImage === 'cat-3' ? 'currentImage' : ''}
            src={cat3}
            alt="cat-3"
            onClick={handleImageClick}
          />
          <img
            className={currentImage === 'dog-4' ? 'currentImage' : ''}
            src={dog4}
            alt="dog-4"
            onClick={handleImageClick}
          />
        </div>
        {animalError === true && (
          <p className="error"> Вы выбрали собачку, а надо котика</p>
        )}
        <Buttons
          pageNumber={4}
          handleClickNextPage={handleClickNextPage}
          handleClickPrevPage={handleClickPrevPage}
        />
      </div>
    )
  }
}

export default Fourth
