import React, { useState } from 'react';

function FetchUserPosts() {
  const [userId, setUserId] = useState('');
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setPost(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const regex = /^[1-9]\d*$/; // Regular expression to match positive integers without leading zeros
  
    if (!regex.test(value)) {
      setError("Invalid Input");
    } else {
      setUserId(value);
    }
  };

  const handleFetchClick = () => {
    if (userId) {
      fetchPost();
    }
  };

  return (
    <div>
      <input
        type="number"
        value={userId}
        onChange={handleInputChange}
        placeholder="Enter user ID"
      />
      <button onClick={handleFetchClick}>Fetch Posts</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchUserPosts;