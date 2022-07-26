import React, { useContext } from "react";
import UserInfo from "../components/UserInfo.jsx";
import AuthContext from "../components/context/AuthContext";
import { Link } from 'react-router-dom'
import NewPost from '../components/NewPost.jsx'
const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
      {user && <UserInfo user={user} />}
      <h1>You are on home page!</h1>
      <Link to='api/create/'>
        <button>Create New Post</button></Link>
        
    </section>
  );
};

export default Home;