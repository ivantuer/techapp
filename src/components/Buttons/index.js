import React from 'react'
import './Buttons.scss'
const Buttons = ({ handleClickNextPage, handleClickPrevPage, pageNumber }) => {
  return pageNumber === 4 ? (
    <div className="buttons">
      <button onClick={handleClickPrevPage} name="prev">
        &lt; Предыдущий
      </button>
      <button onClick={handleClickNextPage} className="finish" name="next">
        Завершить
      </button>
    </div>
  ) : (
    <div className="buttons">
      <button onClick={handleClickPrevPage} name="prev">
        &lt; Предыдущий
      </button>
      <button onClick={handleClickNextPage} name="next">
        Следующий &gt;
      </button>
    </div>
  )
}

export default Buttons
