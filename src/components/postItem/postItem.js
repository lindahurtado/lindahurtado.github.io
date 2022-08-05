import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../../styles/postItem.css"

export const PostItem = ({id,image, name, lastName, tags}) => {

    const navigate = useNavigate();
    const itemRedirect = () => {
        navigate(`/post/${id}`)
    }

  return (
    <div className='item--card__container' onClick={itemRedirect}>
      <img className='item--card__image' src={image} alt='item' />
      <div className='item--card__desc'>
        <div className='item-card-location'>
          {tags.map((e, i) => {
            return <label key={i}>{e}{" "}</label>
          })
          }
        </div>
        <div className='item--card__value'>
          <label className='item-card__value--label'>{name}</label>
          <label>{lastName}</label>
        </div>
      </div>
    </div>
  )
}
