import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import CreatePost from "./CreatePost";
import MyPosts from "./MyPosts";
import PostDetail from "./PostDetail";
import EditPost from "./EditPost";

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/signup"
        element={user ? <Navigate to="/" replace /> : <SignUp />}
      />

      <Route element={<ProtectedRoute />}>
        <Route path="/posts/new" element={<CreatePost />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
        <Route path="/my-posts" element={<MyPosts />} />
      </Route>

      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="*" element={<p className="p-8">Page not found</p>} />
    </Routes>
  );
}