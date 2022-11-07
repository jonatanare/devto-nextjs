import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import linksItems from '../../data/aside-links.json'
import otherLinks from '../../data/other-links.json'
import socialLinks from '../../data/social-links.json'
import tagLinks from '../../data/tags-links.json'
import TagLinks from './TagLinks'

const LinkItem = dynamic(() => import('./LinkItem'), {
  suspense: true
})

export default function AsideLeft () {
  return (
    <>
      <aside className='asideleft d-none d-md-block col-md-3'>
        <ul className='navbar-nav mx-0'>
          {
            linksItems.map((link) => (
              <LinkItem key={link.text} text={link.text} iconLink={link.iconLink} imgIcon={link.icon} imgIconAlt={link.iconAlt} />
            ))
          }
        </ul>
        <h2 className='other-title'>Other</h2>
        <ul className='navbar-nav'>
          {
            otherLinks.map((link) => (
              <LinkItem key={link.text} text={link.text} iconLink={link.iconLink} imgIcon={link.icon} imgIconAlt={link.iconAlt} />
            ))
          }
        </ul>
        <ul className='navbar-nav d-flex flex-row justify-content-between'>
          {
            socialLinks.map((link) => (
              <LinkItem key={link.icon} iconLink={link.iconLink} imgIcon={link.icon} imgIconAlt={link.iconAlt} />
            ))
          }
        </ul>
        <div className='ul-rounded mt-4'>
          <h5>Popular Tags </h5>
          <ul className='navbar-nav'>
            {
              tagLinks.map((link) => (
                <TagLinks key={link.tag} tag={link.tag} link={link.link} />
              ))
            }
          </ul>
        </div>

        <div className='article card p-3 mt-4'>
          <img
            className='imagen my-0'
            src='/assets/home/aside-left-1.png'
            alt=''
          />
          <h3 className=' mt-4 asideleft__letter asideleft__letter--bold '>
            Calling all early-career developers & coding mentors!
          </h3>
          <p className='mt-2 mb-0 asideleft__letter'>
            Join CodeNewbie Community: a supportive space for coding newbies to
            connect & express themselves.{' '}
            <a className='no-text-decoration'>Get in on the fun!</a>
          </p>
        </div>
        <div className=' card p-3 mt-4'>
          <img
            className='imagen my-0'
            src='/assets/home/aside-left-2.png'
            alt=''
          />
          <h3 className=' mt-4 article__title '>The forem shop is here! </h3>
          <p className='mt-2 mb-0 asideleft__letter'>
            <a className='no-text-decoration'>
              {' '}
              Shop Forem, DEV, and CodeNewbie merch
            </a>
          </p>
        </div>
      </aside>
    </>
  )
}
