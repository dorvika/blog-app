import { Route, Routes } from "react-router-dom";
import { CreatePost, Home, Post } from "../pages";

export default function Router() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  );
}
