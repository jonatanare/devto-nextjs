import { TagTopics } from './Tagtopics'
import React from 'react'

export const Post = ({ post }) => {
  return (
    <>
      <article className='post article-single card mb-5'>
        <img className='w-100 m-0 ' src='/assets/post/last-post-post.webp' alt='Imagen cover' />
        <div className='px-4 pt-3'>
          <div className='d-flex '>
            <div className='d-flex align-items-center me-0'>
              <img className='article__autor rounded-circle' src='/assets/home/avatar-home.webp' alt='' />
            </div>
            <div className=' ms-2 '>
              <p className=' btn article__down name mb-0 p-1'>{post.author}</p>
              <label className='date d-block ms-1'>{post.createdAt}</label>
            </div>
          </div>
          <div className='identation p-3 ms-3 pt-2 wrapper-tags'>
            <a className='article__link' href='./post.html?id=@doc_id@'>
              <h2 className='article__title'>{post.title}
              </h2>
            </a>
            <TagTopics tags={post.tags} />
            <p className='post__text mt-3'>{post.description}</p>
          </div>
        </div>
      </article>
    </>
  )
}
