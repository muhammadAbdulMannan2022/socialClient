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
  const fetchPosts = (count) => {
    setPostLoading(true);
    fetch(`${urlOfBackend}/posts?skip=${count}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // TODO: REMOVE THE LOG
        // Append new posts to the previous ones
        count > 0
          ? setPosts((prev) => [...prev, ...data])
          : setPosts((prev) => [...data]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setPostLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts(count); // Fetch posts whenever count changes
    console.log("data loaded...");
  }, [count]);
  useEffect(() => {
    const { top, topMax } = scrollData;
    // console.log(topMax - 500 <= top, postLoading);
    console.log("chorome test", top, topMax);

    if (topMax - 500 <= top && !postLoading) {
      setCount((prev) => prev + 1);
      console.log("count updated", count);
    }
  }, [scrollData]);
  console.log(posts);

  return (
    <div className="bg-black text-white pt-2 md:flex md:flex-col md:items-center md:justify-center">
      <div>
        <PeopleList />
      </div>
      <div>
        {posts.map((post) => (
          <Post key={post?._id} post={post} />
        ))}
        {postLoading && (
          <div>
            <div className=" flex space-x-2 justify-center items-center bg-white h-[100px] dark:invert">
              <span className="sr-only">Loading...</span>
              <div className="h-4 md:h-6 w-4 md:w-6 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-4 md:h-6 w-4 md:w-6 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-4 md:h-6 w-4 md:w-6 bg-black rounded-full animate-bounce"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
