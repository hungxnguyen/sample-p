export async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  return await res.json();
}

export async function getComments(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return await res.json();
}
