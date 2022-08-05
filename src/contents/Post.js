import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Post = () => {
  
    let { id } = useParams();

    useEffect(() => {
      console.log(id);
      fetch(`https://dummyapi.io/data/v1/post/${id}/comment`, {
        headers: {
            "app-id": "62ec62df28efa93884dabc5f"
        }}).then(
        data => console.log(data)
      )
      fetch("https://dummyapi.io/data/v1/post", {
        headers: {
            "app-id": "62ec62df28efa93884dabc5f"
        }}).then(
        data => console.log(data)
      )
    }, [id])
    
  
    return (
    <div>Post</div>
  )
}
