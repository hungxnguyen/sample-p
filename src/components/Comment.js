function Comment({ comment }) {
  return (
    <div className="mb-4 p-2 bg-white rounded-md text-sm space-y-2">
      <p>Name: {comment.name}</p>
      <p>Email: {comment.email}</p>
      <p>Comment: {comment.body}</p>
    </div>
  );
}

export default Comment;
