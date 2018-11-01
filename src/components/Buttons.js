import React from 'react'
import './Buttons.scss'
const Buttons = ({ changeCurrentPage, handleClick }) => {
  return (
    <div className="buttons">
      <button onClick={changeCurrentPage} name="prev">
        &lt; Предыдущий
      </button>
      <button onClick={changeCurrentPage} name="next">
        Следующий &gt;
      </button>
    </div>
  )
}

export default Buttons
