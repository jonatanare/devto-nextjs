import { getDisplayName } from 'next/dist/shared/lib/utils'
import { React, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
const axios = require('axios')

export const AsideNavbar = ({ navs, reactionsCount, id }) => {
  const [state, setState] = useState([])
  const [isAdded, setIsAdded] = useState(false)
  const [reactionFound, setReactionFound] = useState({})

  function getTokenId () {
    const userCurrent = localStorage.getItem('userCurrent')
    const id = JSON.parse(userCurrent)
    return id
  }
  function getTokenFromLocalStorage () {
    return localStorage.getItem('token')
  }

  function handleClick () {
    if (!getTokenFromLocalStorage()) {
      alert('Login to have favorite posts!')
      return
    }
    if (isAdded) {
      deleteReactionApi()
    } else {
      addReactionApi()
    }
  }

  function addReactionApi () {
    const URL_API = 'http://localhost:8080/'
    axios
      .patch(`${URL_API}reactions/${id}`,
        {},
        {
          headers: {
            Authorization: getTokenFromLocalStorage()
          }
        }
      )
      .then(function (response) {
        const reactiondb = response.data.data.post
        setState([...state, reactiondb])
        setReactionFound(reactiondb)
        setIsAdded(true)
      })
      .catch((error) => {})
  }

  function deleteReactionApi () {
    const URL_API = 'http://localhost:8080/'
    axios
      .delete(`${URL_API}reactions/${reactionFound._id}`,
        {
          headers: {
            Authorization: getTokenFromLocalStorage()
          }
        }
      )
      .then(function (response) {
        setState(state.filter(reaction => reaction.author._id !== reactionFound.author._id))
        setIsAdded(false)
      })
      .catch((error) => {})
  }

  useEffect(() => {
    setState(reactionsCount == null ? [] : reactionsCount)
    const rF = reactionsCount.find(
      (reaction) => reaction.author._id == getTokenId()
    )
    setReactionFound(rF)
    setIsAdded(rF != null)
  }, [reactionsCount])

  return (
    <ul className='navbar-nav'>
      {navs.map((nav) => {
        return (
          <li key={nav.icon} className='nav-item text-center'>
            {nav.id == 'heart' && isAdded
              ? (
                <a
                  className='nav-link nav-icons nav-icons--like nav-icons--like_active'
                  onClick={handleClick}
                >
                  <span className='wrapper-icon texv2t-center'>
                    <img src={nav.icon} alt='' />
                  </span>
                </a>
                )
              : (
                <a
                  className='nav-link nav-icons nav-icons--like'
                  onClick={handleClick}
                >
                  <span className='wrapper-icon texv2t-center'>
                    <img src={nav.icon} alt='' />
                  </span>
                </a>
                )}
            <span className='wrapper-icon--count'>
              {nav.id == 'heart' ? state.length : nav.amount}
            </span>
          </li>
        )
      })}
    </ul>
  )
}