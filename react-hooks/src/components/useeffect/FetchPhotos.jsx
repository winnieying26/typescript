import React, { useEffect, useState } from "react";

const FetchPhotos = () => {
  const [photos, setPhotos] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const result = await res.json();
        setPhotos(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <p>Loading Photos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <div>
      <h1>Photos</h1>
      {photos &&
        photos.map((photo) => {
          const { id, title, url } = photo;
          return (
            <li key={id}>
              <strong>{title}</strong>

              <p>{url}</p>
            </li>
          );
        })}
    </div>
  );
};

export default FetchPhotos;
