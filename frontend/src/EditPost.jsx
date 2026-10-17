import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiRequest } from "./api";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest(`/posts/${id}`)
      .then(setPost)
      .catch(err => setError(err.message));
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await apiRequest(`/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: post.title,
          content: post.content,
          category: post.category,
          published: post.published,
        }),
      });
      navigate(`/posts/${id}`);
    } catch (err) {
      setError(err.message);
    }
  }

  if (error && !post) return <p className="p-6">{error}</p>;
  if (!post) return <p className="p-6">Loading editor...</p>;

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-5 text-3xl font-bold">Edit Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input required value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          className="w-full rounded border p-3" />
        <textarea required rows="10" value={post.content}
          onChange={e => setPost({ ...post, content: e.target.value })}
          className="w-full rounded border p-3" />
        <input value={post.category || ""}
          onChange={e => setPost({ ...post, category: e.target.value })}
          className="w-full rounded border p-3" />
        {error && <p className="text-red-600">{error}</p>}
        <button className="rounded bg-black px-5 py-3 text-white">
          Save Changes
        </button>
      </form>
    </main>
  );
}