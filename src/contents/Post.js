import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentItem } from "../components/commentItem/commentItem";

export const Post = () => {
  let { id } = useParams();
  const [dataComment, setDataComment] = useState();

  useEffect(() => {
    fetch(`https://dummyapi.io/data/v1/post/${id}/comment`, {
      headers: {
        "app-id": "62ec62df28efa93884dabc5f",
      },
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        setDataComment(data.data);
    });
  }, [id]);

  return (
    <div>
      {dataComment && dataComment.length >= 1 ?
        dataComment.map((po,i) => {
          return (
            <div key={i} className="posts">
              <CommentItem  
                image={po.owner.picture}
                message={po.message}
                owner={po.owner.firstName}
              />
            </div>
          );
        })
        :
        <h1>No hay comentarios</h1>
    }
    </div>
  );
};
