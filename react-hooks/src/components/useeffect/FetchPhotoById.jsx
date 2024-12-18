import React, { useState, useEffect } from "react";

const FetchPhotoById = () => {

    const [photoId, setPhotoId] = useState(1); // State for the current photo ID
    const [photo, setPhoto] = useState(null); // State for the photo data
    const [error, setError] = useState(null); // State for errors
    const [loading, setLoading] = useState(false); // State for loading status
  
    const fetchPhotoById = async (id) => {
      setLoading(true);
      setError(null); // Reset error
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
        if (!res.ok) {
          throw new Error(`Photo not found (ID: ${id})`);
        }
        const data = await res.json();
        setPhoto(data);
      } catch (err) {
        setError(err.message);
        setPhoto(null);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchPhotoById(photoId);
    }, [photoId]); // Fetch new photo whenever the ID changes
  
    const handleNext = () => setPhotoId((prevId) => prevId + 1); // Increment ID
    const handlePrev = () => setPhotoId((prevId) => (prevId > 1 ? prevId - 1 : 1)); // Decrement ID, ensure it doesn't go below 1
  
  return (
    <div>
    <h1>Photo Viewer</h1>
    <div>
      <button onClick={handlePrev} disabled={photoId <= 1}>
        Previous
      </button>
      <button onClick={handleNext}>Next</button>
    </div>
    {loading && <p>Loading photo...</p>}
    {error && <p style={{ color: "red" }}>{error}</p>}
    {photo && (
      <div>
        <h2>{photo.title}</h2>
        <img src={photo.url} alt={photo.title} style={{ maxWidth: "100%" }} />
      </div>
    )}
  </div>
  )
}

export default FetchPhotoById
