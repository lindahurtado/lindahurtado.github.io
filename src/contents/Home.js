import React, { useEffect, useState } from "react";
import { PostItem } from "../components/postItem/postItem";

export const Home = () => {
  
    const [postService, setPostService] = useState(); 

    useEffect(() => {
        fetch("https://dummyapi.io/data/v1/post?page=1&limit=10", {
        headers: {
            "app-id": "62ec62df28efa93884dabc5f",
        },
        }).then((data) => {setPostService(data.data); console.log(data.body)});
    }, []);
    

  return (
    <div>
      {postService && postService.map((po) => {
        return (
          <>
            <PostItem
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
