import React, { useEffect, useState } from "react";

const FetchPosts = () => {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const result = await res.json();
        setPosts(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <p>Loading....</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts &&
          posts.map(({ id, title, body }) => (
            <li key={id}>
              <strong>{title}</strong>
              <p>{body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FetchPosts;
