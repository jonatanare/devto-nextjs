import React from 'react'

export default function RightAsideInfo ({ title, tags }) {
  return (
    <>
      <div>
        <a className='text-decoration-none  listing__card' href='#'>
          <div className='p-3 nav-tabs'>
            <p className='listing__text mb-1 listing__card'>{title}</p>
            <ul className='d-flex flex-wrap'>
              {tags.map((tag) => {
                return (
                  <li className='listing__figcaption d-flex justify-content-center ms-3'>{tag}</li>
                )
              })}
            </ul>
          </div>
        </a>
      </div>
    </>
  )
}
