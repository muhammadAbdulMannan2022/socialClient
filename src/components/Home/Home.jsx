import React, { useContext, useEffect, useState } from "react";
import PeopleList from "./PeopleList";
import Post from "../Post/Post";
import { AuthContext } from "../../Providers/AuthProviders";
import { ScrollContext } from "../../layouts/HomeLayout";

const Home = () => {
  const { urlOfBackend } = useContext(AuthContext);
  const scrollData = useContext(ScrollContext);
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [postLoading, setPostLoading] = useState(false);

  // Function to fetch posts
  const fetchPosts = () => {
    setPostLoading(true);
    fetch(`${urlOfBackend}/posts?skip=${count}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Append new posts to the previous ones
        setPosts((prev) => [...prev, ...data]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setPostLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts whenever count changes
  }, [count]);
  useEffect(() => {
    const { top, topMax } = scrollData;
    // console.log(topMax - 500 <= top, postLoading);

    if (topMax - 500 <= top && !postLoading) {
      setCount((prev) => prev + 1);
      console.log("count updated", count);
    }
  }, [scrollData]);

  return (
    <div className="bg-black text-white pt-2 md:flex md:flex-col md:items-center md:justify-center">
      <div>
        <PeopleList />
      </div>
      <div>
        {posts.map((post) => (
          <Post key={post?._id} post={post} />
        ))}
        {postLoading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Home;
