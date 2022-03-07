import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Post from "../components/Post";
import { getPosts } from "../utils/fetchData";
import SubHeading from "../components/SubHeading";

function SameAuthor() {
  const [posts, setPosts] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      getPosts().then((posts) => {
        const filteredPosts = posts.filter(
          (post) => post.userId === Number(userId)
        );
        setPosts(filteredPosts);
      });
    }
  }, [userId]);

  if (!posts) return <div>Loading...</div>;

  return (
    <div className="overflow-auto">
      <SubHeading heading={`More posts by Author: ${userId}`} />
      {posts.map((post) => (
        <Link to={"/post/" + post.id} key={post.id}>
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
}

export default SameAuthor;
