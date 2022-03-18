import { Routes, Route } from "react-router-dom";
import AllPosts from "./containers/AllPosts";
import SameAuthor from "./containers/SameAuthor";
import Header from "./components/Header";
import PostDetails from "./containers/PostDetails";

function App() {
  return (
    <div className="bg-white border border-slate-800 rounded-md max-h-[90vh] mt-[35px] max-w-[300px] sm:max-w-[500px] md:max-w-[600px] mx-auto overflow-auto flex flex-col">
      <Header />
      <Routes>
        <Route path="/" exact element={<AllPosts />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/post/:id/author/:userId" element={<SameAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
