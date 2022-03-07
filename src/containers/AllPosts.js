import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "../components/Post";
import { getPosts } from "../utils/fetchData";
import SubHeading from "../components/SubHeading";

function AllPosts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (!posts) {
      getPosts().then((posts) => {
        setPosts(posts);
      });
    }
  }, [posts]);

  if (!posts) return <div>Loading...</div>;

  return (
    <div className="overflow-auto">
      <SubHeading heading="All posts" />
      {posts.map((post) => (
        <Link to={"/post/" + post.id} key={post.id}>
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
}

export default AllPosts;
