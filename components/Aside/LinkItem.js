import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LinkItem ({ text, iconLink, imgIcon, imgIconAlt, classN = '' }) {
  return (
    <>
      <li className='nav-item'>
        <Link className={`nav-link ${classN}`} href={iconLink}>
          <span className='me-2'>
            <Image
              src={`${imgIcon}`}
              alt={`${imgIconAlt}`}
              layout='fill'
              width={24}
              height={24}
            />
          </span>
          {text}
        </Link>
      </li>
    </>
  )
}
