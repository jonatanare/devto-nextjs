import React from 'react'
import { SideNavBar } from './Post/AsideNavbar'
import { Post } from './Post/Post'
import { RightAside } from './Post/RightAside'

export default function Detail ({ post }) {
  const navs = [{
    icon: '/assets/icons/heart.svg',
    amount: 18
  },
  {
    icon: '/assets/icons/speaker.svg',
    amount: 23
  },
  {
    icon: '/assets/icons/save.svg',
    amount: 32
  },
  {
    icon: '/assets/icons/dots.svg'
  }
  ]
  return (
    <>

      <div className='container post__detail'>
        <div className='row mt-5'>
          <div className='col-md-1 col-lg-1 d-none d-md-flex justify-content-center post-aside-left mt-5'>
            <SideNavBar navs={navs} />
          </div>
          <div className='col-md-11 col-lg-8'>
            <Post post={post} />
          </div>
          <aside className='aside d-none d-lg-block col-lg-3 p-0'>
            <RightAside />
          </aside>
        </div>
      </div>
    </>
  )
}
