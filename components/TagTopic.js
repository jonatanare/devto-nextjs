import React from 'react'

export const TagTopic = ({ tag }) => {
  return (
    <a className={`btn article__btn article__btn--${tag}`}>
      <span> {tag} </span>
    </a>
  )
}
