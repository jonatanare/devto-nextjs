import {React,useState,useEffect} from 'react'
const axios = require('axios');

export const AsideNavbar = ({ navs, reactionsCount, id }) => {
  
  const [state, setState] = useState([]);
  const [disabledB, setDisabledB] = useState(false);
  function handleClick() {
    //reactions.push("2");
  const URL_API = 'http://localhost:8080/'
    axios.patch(`${URL_API}posts/${id}/reactions`)
    .then(function (response) {
      const posts = response.data._id
      setState([...state, "like"]);
      setDisabledB(true)
    console.log(state)  
    })
    .catch((error) => console.log(error))
    
  }

  useEffect(() => {
    setState(reactionsCount==null?[]:reactionsCount)
  }, [reactionsCount]);
  return (
    <ul className='navbar-nav'>
      {
          navs.map((nav) => {
            return (
              <li key={nav.icon} className='nav-item text-center'>
                <a className='nav-link nav-icons nav-icons--like ' onClick={handleClick} disabled={disabledB}>
                  <span className='wrapper-icon texv2t-center'>
                    <img src={nav.icon} alt='' />
                  </span>
                </a>
                <span className='wrapper-icon--count'>
                  
                  {
                    nav.id=="heart"
                  ?state.length
                  :nav.amount}
                </span>
              </li>
            )
          })
          }
    </ul>
  )
}
