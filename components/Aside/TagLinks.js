import React from 'react'

export default function TagLinks ({ tag, link }) {
  return (
    <li className='nav-item'>
      <a className='nav-link' href={link}>
        {tag}
      </a>
    </li>
  )
}
