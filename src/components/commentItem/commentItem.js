import React from 'react'
import "../../styles/commentItem.css"

export const CommentItem = ({image, message, owner}) => {

  return (
    <div className='item--card__container'>
      <img className='item--card__image' src={image} alt='item' />
      <div className='description'>
        <label className='item--card__message'>{message}</label>
        <div className='item--card__customer' >{owner}</div>
      </div>
    </div>
  )
}
