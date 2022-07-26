import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileBase64 from "react-file-base64";
import axios from "axios";

export default function NewPost() {
  const [post, setPost] = useState({});

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(post);
  };

  axios.get("http://localhost:8000/api/create/")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <h1>New Post</h1>
      <hr />
      <form onSubmit={handlesubmit}>
        <input 
        type='text'
        placeholder="Enter caption"
        name="caption"
        onChange={handleChange}
        />
        <FileBase64 />
        <button type='submit'>Submit</button>
      </form>
      <Link to="/">Back to home</Link>
    </div>
  );
}
