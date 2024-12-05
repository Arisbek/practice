import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

function DebouncedSearchPosts() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${searchTerm}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchPosts();
    } else {
      setPosts([]);
    }
  }, [searchTerm]);

  const debouncedSearch = debounce((value) => {
    setSearchTerm(value);
  }, 300);

  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleSearchChange}
        placeholder="Search by title"
      />
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

export default DebouncedSearchPosts;