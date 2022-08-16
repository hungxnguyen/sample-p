import { Routes, Route } from "react-router-dom";
import AllPosts from "./containers/AllPosts";
import SameAuthor from "./containers/SameAuthor";
import Header from "./components/Header";
import PostDetails from "./containers/PostDetails";
import { createContext, useEffect, useState } from 'react';
import { getPosts } from './utils/fetchData';

export const postsContext = createContext()

function App() {
  // We are creating "global store" that other contexts can use. 
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);
  return (
    <div className="bg-white border border-slate-800 rounded-md max-h-[90vh] mt-[35px] max-w-[300px] sm:max-w-[500px] md:max-w-[600px] mx-auto overflow-auto flex flex-col">
      <Header />
      <postsContext.Provider value={{ posts, setPosts }}>
        <Routes>
          <Route path="/" exact element={<AllPosts />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/post/:id/author/:userId" element={<SameAuthor />} />
        </Routes>
      </postsContext.Provider>
    </div>
  );
}

export default App;
