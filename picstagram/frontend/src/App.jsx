import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import NewPost from "./views/NewPost";

export default function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <AuthProvider>
            <Navbar />
            <Switch>
              <Route component={NewPost} path="/api/create" />
              <Route component={Login} path="/login" />
              <Route component={Register} path="/register" />
              <Route component={Home} path="/" />
            </Switch>
          </AuthProvider>
          <Footer />
        </div>
      </Router>
    </>
  );
}
