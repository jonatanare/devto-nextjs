import React from 'react'

export const SideNavBar = ({ navs }) => {
  return (
    <ul className='navbar-nav'>
      {
          navs.map((nav) => {
            return (
              <li className='nav-item text-center'>
                <a className='nav-link nav-icons nav-icons--like '>
                  <span className='wrapper-icon texv2t-center'>
                    <img src={nav.icon} alt='' />
                  </span>
                </a>
                <span className='wrapper-icon--count'>
                  {nav.amount}
                </span>
              </li>
            )
          })
          }
    </ul>
  )
}
