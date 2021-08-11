import LoginButton from "./LoginButton";
import "../assets/formLogin.css";
import React, { useState } from "react";

export default function FormLogin() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ [name]: value });
    console.log(userData);
  };

  return (
    <div className="formLogin">
      <div className="logo">
        <img
          src="https://www.kotakode.com/static/media/kotakode-logo.6f6a3051.png"
          alt="kotakode"
        />
      </div>
      <form action="#" className="boxForm">
        <div className="input">
          <label htmlFor="username">Email/Username</label>
          <input
            type="text"
            id="email/user"
            name="username"
            onChange={inputHandle}
          />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={inputHandle}
          />
        </div>
        <p className="lupaPassword">
          <a href="#">Lupa Password?</a>
        </p>
        <button className="login">Masuk</button>
        <p>atau masuk dengan</p>
        <LoginButton />
      </form>
    </div>
  );
}
