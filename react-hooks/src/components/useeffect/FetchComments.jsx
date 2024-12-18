import React, { useEffect, useState } from "react";

const FetchComments = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const result = await res.json();
        setComments(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <div>
      <h1>Comments</h1>
      {comments &&
        comments.map((comment) => {
          const { id, name, email, body } = comment;
          return (
            <li key={id}>
              <strong>{name}</strong>
              <h2>{name}</h2>
              <p>{email}</p>
              <p>{body}</p>
            </li>
          );
        })}
    </div>
  );
};

export default FetchComments;
