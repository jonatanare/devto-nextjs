import React from 'react'

export default function IconTools ({ toolsComponent }) {
  return (
    <>
      <div className='d-flex tools'>
        {toolsComponent.map((tool) => {
          return (
          <img className='crayons-icon me-3' src={tool.icon} alt='' />)
        }
        )}
      </div>
    </>
  )
}
