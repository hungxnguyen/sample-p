function Post({ post }) {
  return (
    <div className="bg-slate-200 p-7 mb-2 space-y-3">
      <h3 className="text-lg font-bold">{post.title}</h3>
      <p className="text-base font-light">{post.body}</p>
      <p className="text-sm font-light">Author: {post.userId}</p>
    </div>
  );
}

export default Post;
