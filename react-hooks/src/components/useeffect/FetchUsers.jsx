import React, { useState, useEffect } from "react";

const FetchUsers = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const result = await res.json();
        setUsers(result);
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
      <h1>Users</h1>
      {users &&
        users.map((user) => {
          const { id, name, username, email, phone } = user;
          return (
            <li key={id}>
              <h2>{name}</h2>
              <p>{username}</p>
              <p>{email}</p>
              <p>{phone}</p>
            </li>
          );
        })}
    </div>
  );
};

export default FetchUsers;
