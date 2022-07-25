
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

export default function App() {
  const [posts, setPosts] = useState([]);


 function getPost(){
  let data 
  axios.get('http://127.0.0.1:8000/api/post/')
  .then(res => {
    data = res.data;
    setPosts(data);
  })
  .catch(err => {
    console.log(err);
  }
  )}
  useEffect(() => {
    getPost()
  }, [])
  return (
    <div>
      {posts.map((post) => (
        <div>
          {post.comments}</div>))}
    </div>
  );

}