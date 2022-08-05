import React, { useEffect, useState } from "react";
import { PostItem } from "../components/postItem/postItem";

export const Home = () => {

  const [postService, setPostService] = useState();
  const [tag, setTag] = useState();
  const [tagSelected, setTagSelected] = useState("dog");

  useEffect(() => {
    fetch(`https://dummyapi.io/data/v1/tag/${tagSelected}/post?page=1&limit=10`, {
      headers: {
        "app-id": "62ec62df28efa93884dabc5f",
      },
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        setPostService(data.data);
    });
    fetch(`https://dummyapi.io/data/v1/tag?page=1&limit=1`, {
        headers: {
            "app-id": "62ec62df28efa93884dabc5f",
        },
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        setTag(data.data);
    });
  }, [tagSelected]);

  const handleChange = (e) => {
    setTagSelected(e.target.value)
  }

  return (
    <div>
      <div className="select-container">
        <select value={""} onChange={handleChange}>
          {tag && tag.map((option, i) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
      {postService &&
        postService.map((po, i) => {
          return (
            <>
              <PostItem
                key={i}
                id={po.id}
                image={po.image}
                likes={po.likes}
                text={po.text}
                owner={po.owner.firstName}
              />
            </>
          );
        })}
    </div>
  );
};
