import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';

export default function App() {
  const [posts, setPosts] = useState([]);

 function getPost(){
  let data 
  axios.get('https://localhost:8000/')
  .then(res => {
    data = res.data;
    setPosts(data);
  })
  .catch(err => {
    console.log(err);
  }
  )
  return (
    <div>
      {posts.map(posts => {
        <div>
          <h1>{posts.description}</h1></div>})}
    </div>
  );
}
}