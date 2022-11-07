import React from 'react'

export const ActionPost = ({ reactions }) => {
  return (
    <div className='d-flex justify-content-between mb-2'>
      <div>
        <a className='btn article__btn article__btn--action'>
          <img src='/assets/home/heart.svg' alt='Icon ' />
          {reactions} Reactions
        </a>
        <a className='btn article__btn article__btn--action'>
          <img src='/assets/home/comment.svg' alt='' />
          Add Comment
        </a>
      </div>
      <div>
        <span className='ms-2'>
          2 min
        </span>
        <a>
          <img
            className='btn article__btn me-1'
            src='/assets/home/save.svg'
            alt='Icon '
          />
        </a>
      </div>
    </div>
  )
}
