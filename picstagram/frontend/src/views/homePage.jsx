import React, { useContext, useState, useEffect } from "react";
import UserInfo from "../components/UserInfo.jsx";
import AuthContext from "../components/context/AuthContext";
import { Link } from 'react-router-dom'
import NewPost from '../components/NewPost.jsx'
import axios from "axios";
const Home = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  function getPost() {
    let data;
    axios
      .get("http://127.0.0.1:8000/api/post/")
      .then((res) => {
        data = res.data;
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getPost();
  }, []);
  return (
    <section>
      {user && <UserInfo user={user} />}
      <h1>You are on home page!</h1>
      <Link to='api/create/'>
        <button>Create New Post</button></Link>
        <div>
        {posts.map((post) => (
          <div>{post.comments}</div>
        ))}
      </div>  
    </section>
  );
};

export default Home;