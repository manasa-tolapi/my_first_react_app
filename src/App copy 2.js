import React, { useEffect, useState } from "react";
import "./App.css";

const API_BASE = "http://localhost:3001";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  // Fetch all posts
  useEffect(() => {
    fetch(`${API_BASE}/api/posts`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  // Fetch single post
  const openPost = (handle) => {
    fetch(`${API_BASE}/api/posts/${handle}`)
      .then(res => res.json())
      .then(data => setSelectedPost(data))
      .catch(err => console.error(err));
  };

  // Back to list
  const goBack = () => {
    setSelectedPost(null);
  };

  // Single post view
  if (selectedPost) {
    return (
      <div className="container">
        <button onClick={goBack} className="back-btn">← Back</button>
        <h1>{selectedPost.title}</h1>
        <img src={selectedPost.image} alt="" className="post-image" />
        <p>{selectedPost.body}</p>
      </div>
    );
  }

  // Posts grid view
  return (
    <div className="container">
      <h1>News Blog</h1>
      <div className="grid">
        {posts.map(post => (
          <div
            key={post.handle}
            className="card"
            onClick={() => openPost(post.handle)}
          >
            <img src={post.image} alt="" />
            <h3>{post.title}</h3>
            <p>{post.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;