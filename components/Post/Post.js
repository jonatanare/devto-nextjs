import { TagTopics } from './Tagtopics'
import React from 'react'

export const Post = ({ post }) => {
  return (
    <>
      <article class='post article-single card mb-5'>
        <img class='w-100 m-0 ' src='/assets/post/last-post-post.webp' alt='Imagen cover' />
        <div class='px-4 pt-3'>
          <div class='d-flex '>
            <div class='d-flex align-items-center me-0'>
              <img class='article__autor rounded-circle' src='/assets/home/avatar-home.webp' alt='' />
            </div>
            <div class=' ms-2 '>
              <p class=' btn article__down name mb-0 p-1'>{post.author}</p>
              <label class='date d-block ms-1'>{post.createdAt}</label>
            </div>
          </div>
          <div class='identation p-3 ms-3 pt-2 wrapper-tags'>
            <a class='article__link' href='./post.html?id=@doc_id@'>
              <h2 class='article__title'>{post.title}
              </h2>
            </a>
            <TagTopics tags={post.tags} />
            <p class='post__text mt-3'>{post.description}</p>
          </div>
        </div>
      </article>
    </>
  )
}
