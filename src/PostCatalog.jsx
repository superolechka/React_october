import React, { useState, useEffect } from 'react';

function PostCatalog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="posts">
      <ul className="posts__list">
        {posts.map((post) => (
          <li key={post.id} className="posts_single-post" data-post-id={post.id}>
            <h3 className="posts__post-title">{post.title}</h3>
            <p className="posts__post-description">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostCatalog;