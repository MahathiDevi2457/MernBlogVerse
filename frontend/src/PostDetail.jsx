import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiRequest } from "./api";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest(`/posts/${id}`)
      .then(setPost)
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <p className="p-6">{error}</p>;
  if (!post) return <p className="p-6">Loading post...</p>;

  return (
    <main className="mx-auto max-w-3xl p-6">
      <Link to="/">← Home</Link>
      <h1 className="my-5 text-4xl font-bold">{post.title}</h1>
      <p className="mb-5 text-gray-500">
        By {post.author?.name || "Author"}
      </p>
      <div className="whitespace-pre-wrap leading-8">{post.content}</div>
    </main>
  );
}