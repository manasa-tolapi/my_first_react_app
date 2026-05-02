import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const API_BASE = "http://3.82.252.20:3001";

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE}/api/posts`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="container">
      <h1>News Blog</h1>
      <div className="grid">
        {posts.map(post => (
          <div
            key={post.handle}
            className="card"
            onClick={() => navigate(`/post/${post.handle}`)}
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

export default Home;
