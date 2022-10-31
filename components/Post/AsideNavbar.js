import React from 'react'

export const SideNavBar = ({ navs }) => {
  return (
    <ul class='navbar-nav'>
      {
          navs.map((nav) => {
            return (
              <li class='nav-item text-center'>
                <a class='nav-link nav-icons nav-icons--like '>
                  <span class='wrapper-icon texv2t-center'>
                    <img src={nav.icon} alt='' />
                  </span>
                </a>
                <span class='wrapper-icon--count'>
                  {nav.amount}
                </span>
              </li>
            )
          })
          }
    </ul>
  )
}
