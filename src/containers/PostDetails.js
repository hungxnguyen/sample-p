import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { Link, useParams } from "react-router-dom";
import { getPosts, getComments } from "../utils/fetchData";
import Comment from "../components/Comment";
import SubHeading from "../components/SubHeading";

function Detail() {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const { id: postId } = useParams();

  useEffect(() => {
    if (postId) {
      getPosts().then((post) => {
        const filteredPost = post.find((post) => post.id === Number(postId));
        setPost(filteredPost);
      });
      getComments(postId).then((commentsData) => {
        setComments(commentsData);
      });
    }
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="bg-slate-200 overflow-auto rounded-md">
      <SubHeading heading="Post details" />
      <Post post={post} />

      <div className="flex justify-center">
        <Link to={`/post/${postId}/author/` + post.userId}>
          <button className="bg-slate-500 p-2 rounded-md text-white w-48 hover:bg-slate-600">
            More Posts by Author: {post.userId}
          </button>
        </Link>
      </div>

      <div className="p-7">
        <h3 className="font-semibold mb-2">Comments:</h3>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
}

export default Detail;
