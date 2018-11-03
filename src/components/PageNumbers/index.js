import React from 'react'
import './PageNumbers.scss'
const PageNumbers = ({ current, changeCurrentPage, availablePages }) => {
  return (
    <div className="page-numbers">
      <li
        onClick={changeCurrentPage}
        style={current === 1 ? { color: 'black' } : {}}
        className={availablePages.includes(1) ? 'available' : ''}
      >
        1
      </li>
      <li
        onClick={changeCurrentPage}
        style={current === 2 ? { color: 'black' } : {}}
        className={availablePages.includes(2) ? 'available' : ''}
      >
        2
      </li>
      <li
        onClick={changeCurrentPage}
        style={current === 3 ? { color: 'black' } : {}}
        className={availablePages.includes(3) ? 'available' : ''}
      >
        3
      </li>
      <li
        onClick={changeCurrentPage}
        style={current === 4 ? { color: 'black' } : {}}
        className={availablePages.includes(4) ? 'available' : ''}
      >
        4
      </li>
    </div>
  )
}

export default PageNumbers
