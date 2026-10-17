import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiRequest } from "./api";

export default function MyPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest("/posts/mine")
      .then(setPosts)
      .catch(err => setError(err.message));
  }, []);

  async function deletePost(id) {
    if (!window.confirm("Delete this post?")) return;
    try {
      await apiRequest(`/posts/${id}`, { method: "DELETE" });
      setPosts(posts.filter(post => post._id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-5 text-3xl font-bold">My Posts</h1>
      {error && <p className="text-red-600">{error}</p>}
      {posts.map(post => (
        <article key={post._id} className="mb-4 rounded border p-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <div className="mt-3 flex gap-4">
            <Link to={`/posts/${post._id}`}>View</Link>
            <Link to={`/posts/${post._id}/edit`}>Edit</Link>
            <button onClick={() => deletePost(post._id)}>Delete</button>
          </div>
        </article>
      ))}
      {!posts.length && !error && <p>No posts yet.</p>}
    </main>
  );
}