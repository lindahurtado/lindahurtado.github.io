import React from 'react'
import "./commentItem.css"

export const CommentItem = ({image, message, owner}) => {



  return (
    <div className='item-card-container'>
      <img className='item-card-image' src={image} alt='item' />
      <div className='item-card-desc'>
        <div className='item-card-name'>{message}</div>
      </div>
      <div className='item-card-location' >{owner}</div>
    </div>
  )
}
