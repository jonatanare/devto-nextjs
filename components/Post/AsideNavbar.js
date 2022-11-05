import { getDisplayName } from 'next/dist/shared/lib/utils';
import {React,useState,useEffect} from 'react'
const axios = require('axios');

export const AsideNavbar = ({ navs, reactionsCount, id }) => {
  const normal = '';
  const [state, setState] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const authorFound = reactionsCount.find(author=>author.author == getIdFromLocalStorage())

  function getIdFromLocalStorage(){
    return JSON.parse(localStorage.getItem("token")).id
  }
  function handleClick() {
    if(isAdded){
      return;
    }
    //reactions.push("2");
  const URL_API = 'http://localhost:8080/'
    axios.patch(`${URL_API}posts/${id}/reactions`,{author:getIdFromLocalStorage()})
    .then(function (response) {
      const reactiondb = response.data.data.post
      setState([...state, reactiondb])
      setIsAdded(true)
      console.log(state)  
    })
    .catch((error) => console.log(error))
    
  }

  useEffect(() => {
    setState(reactionsCount==null?[]:reactionsCount)
    
    setIsAdded(authorFound!=null )
  }, [reactionsCount])
  return (
    <ul className='navbar-nav'>
      {
          navs.map((nav) => {
            return (
              <li key={nav.icon} className='nav-item text-center'>
                {
                  
                  nav.id=="heart" && isAdded
                  
                  ?<a className='nav-link nav-icons nav-icons--like nav-icons--like_active' onClick={handleClick} >
                    <span className='wrapper-icon texv2t-center'>
                      <img src={nav.icon} alt='' />
                    </span>
                  </a>
                  :<a className='nav-link nav-icons nav-icons--like'  onClick={handleClick}>
                  <span className='wrapper-icon texv2t-center'>
                    <img src={nav.icon} alt='' />
                  </span>
                </a>
                }
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
