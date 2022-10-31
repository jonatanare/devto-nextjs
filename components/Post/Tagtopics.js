import React from 'react'

export const TagTopics = ({ tags }) => {
  return (
    <div class='d-flex flex-wrap'>
      {tags.map((tag) => {
        return (
          <a className={`btn post__btn--${tag}`}>
            <span> {tag} </span>
          </a>
        )
      })}
    </div>
  )
}
