import React, { useEffect } from 'react'
import { AsideNavbar } from './Post/AsideNavbar'
import { Post } from './Post/Post'
import { RightAside } from './Post/RightAside'
import navs from '../data/navs-links.json'
import { useRouter } from 'next/router'
const axios = require('axios')

export default function Detail ({ post }) {
  const router = useRouter()
  let reactions
  const { id } = router.query
  const URL_API = 'http://localhost:8080/'
  useEffect(() => {
    axios.get(`${URL_API}posts/${id}`)
      .then((response) => {
        const postData = response.data.data.post
        reactions = postData.reactions
      })
      .catch((error) => {})
      .finally(() => {
      })
  }, [])
  return (
    <>
      <div className='container post__detail'>
        <div className='row mt-5'>
          <div className='col-md-1 col-lg-1 d-none d-md-flex justify-content-center post-aside-left mt-5'>
            <AsideNavbar navs={navs} reactions={reactions} id={id} />
          </div>
          <div className='col-md-11 col-lg-8'>
            {/* <Post post={post} /> */}
          </div>
          <aside className='aside d-none d-lg-block col-lg-3 p-0'>
            <RightAside />
          </aside>
        </div>
      </div>
    </>
  )
}
