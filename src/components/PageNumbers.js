import React from 'react'
import './PageNumbers.scss'
const PageNumbers = ({ current, changeCurrentPage }) => {
  return (
    <div className="page-numbers">
      <li
        onClick={changeCurrentPage}
        className={current === 1 ? 'current' : ''}
      >
        1
      </li>
      <li
        onClick={changeCurrentPage}
        className={current === 2 ? 'current' : ''}
      >
        2
      </li>
      <li
        onClick={changeCurrentPage}
        className={current === 3 ? 'current' : ''}
      >
        3
      </li>
      <li
        onClick={changeCurrentPage}
        className={current === 4 ? 'current' : ''}
      >
        4
      </li>
    </div>
  )
}

export default PageNumbers
