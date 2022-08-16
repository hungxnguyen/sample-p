import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Post from "../components/Post";
import SubHeading from "../components/SubHeading";
import { postsContext } from '../App';

function SameAuthor() {
  const { posts }  = useContext(postsContext);
  const { userId } = useParams();
  const filteredPosts = posts?.filter(
    (post) => post.userId === Number(userId)
  )

  if (!filteredPosts) return <div>Loading...</div>;

  return (
    <div className="overflow-auto">
      <SubHeading heading={`More posts by Author: ${userId}`} />
      {filteredPosts.map((post) => (
        <Link to={"/post/" + post.id} key={post.id}>
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
}

export default SameAuthor;
