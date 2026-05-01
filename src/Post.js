import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:3001";

function Post() {
  const { handle } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/post/${handle}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [handle]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container">
      <button onClick={() => navigate("/")}>← Back</button>
      <h1>{post.title}</h1>
      <img src={post.image} alt="" className="post-image" />
      <p>{post.body}</p>
    </div>
  );
}

export default Post;