import React, { useContext } from "react";
import UserInfo from "../components/UserInfo.jsx";
import AuthContext from "../components/context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
      {user && <UserInfo user={user} />}
      <h1>You are on home page!</h1>
    </section>
  );
};

export default Home;