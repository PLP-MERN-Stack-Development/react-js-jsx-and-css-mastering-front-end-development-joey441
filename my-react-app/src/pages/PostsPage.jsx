import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="text-center py-6">
        <p className="text-gray-500">Loading posts...</p>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-6 text-red-500">
        <p>Error: {error}</p>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Card title="Latest Posts">
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
              <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default PostsPage;
