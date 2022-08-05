import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./postItem.css"

export const PostItem = ({id, image, likes, text, owner}) => {

    const navigate = useNavigate();
    const itemRedirect = () => {
        navigate(`/post/${id}`)
    }

  return (
    <div className='item-card-container' onClick={itemRedirect}>
      <img className='item-card-image' src={image} alt='item' />
      <div className='item-card-desc'>
        <div className='item-card-price'>
          <div className='item-card-value'>{likes}</div>
        </div>
        <div className='item-card-name'>{text}</div>
      </div>
      <div className='item-card-location' >{owner}</div>
    </div>
  )
}
