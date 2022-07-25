
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";

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
    <>
     <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Navbar />
          <Switch>
            <PrivateRoute component={ProtectedPage} path="/protected" exact />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={Home} path="/" />
          </Switch>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
    <div>
      {posts.map((post) => (
        <div>
          {post.comments}</div>))}
    </div>
    </>
  );

}