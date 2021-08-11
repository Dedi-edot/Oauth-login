import React from "react";
import "../assets/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="logo">
          <a href="https://www.kotakode.com/">
            <img
              src="https://www.kotakode.com/static/media/kotakode-logo.6f6a3051.png"
              alt="kotakpde"
            />
          </a>
        </div>
        <div className="nav-link">
          <button>Tentang</button>
          <button>Produk</button>
          <button>FAQ</button>
          <button>Events</button>
          <button>Partnership</button>
        </div>
      </div>
      <div className="menu">
        <button className="masuk">Masuk</button>
        <button className="daftar">Daftar</button>
      </div>
    </div>
  );
}
