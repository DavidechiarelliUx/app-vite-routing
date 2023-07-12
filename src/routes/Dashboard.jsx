import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../mocks/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [imgProfile, setImgProfile] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem("isLogged")));
    if (JSON.parse(localStorage.getItem("isLogged"))) {
      const user = auth.find(
        (u) => u.username === localStorage.getItem("username")
      );
      setUsername(user.username);
      setImgProfile(user.imgProfile);
      setInfo(user.info);
    }
  }, []);

  const onHandleLogout = () => {
    localStorage.setItem("isLogged", false);
    localStorage.setItem("username", "");
    setIsLogged(false);
    navigate("/login");
  };

  return isLogged ? (
    <div>
      <h1>Dashboard</h1>
      <img src={imgProfile} alt="Profile" />
      <h2>{username}</h2>
      <p>{info}</p>
      <button onClick={onHandleLogout}>Logout</button>
    </div>
  ) : (
    navigate("/login")
  );
};

export default Dashboard;