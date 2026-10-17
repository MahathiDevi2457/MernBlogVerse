import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "./api";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const post = await apiRequest("/posts", {
        method: "POST",
        body: JSON.stringify({ title, content, category, published: true }),
      });
      navigate(`/posts/${post._id}`);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-4 text-3xl font-bold">Create a Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input required placeholder="Title" value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full rounded border p-3" />
        <input placeholder="Category" value={category}
          onChange={e => setCategory(e.target.value)}
          className="w-full rounded border p-3" />
        <textarea required placeholder="Write your story..." value={content}
          onChange={e => setContent(e.target.value)}
          className="w-full rounded border p-3" rows="10" />
        {error && <p className="text-red-600">{error}</p>}
        <button className="rounded bg-black px-5 py-3 text-white">
          Publish
        </button>
      </form>
    </main>
  );
}