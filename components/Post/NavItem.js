
import React from 'react'

export default function NavItem ({ imgIcon, imgIconAlt, text, iconLink }) {
  return (
    <>
      <li className='nav-item text-center'>
        <a className='nav-link nav-icons nav-icons--like ' href={iconLink}>
          <span className='wrapper-icon texv2t-center'>
            <img src={imgIcon} alt={imgIconAlt} />
          </span>
        </a>
        <span className='wrapper-icon--count'>
          {text}
        </span>
      </li>
    </>
  )
}
