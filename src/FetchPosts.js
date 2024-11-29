import React, { useEffect, useState } from 'react';

function FetchPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          {post.id}) {post.title} by {post.userId}
          <br />
          {post.body}
          <br />
          _
        </li>
      ))}
    </ul>
  );
}

export default FetchPosts;
