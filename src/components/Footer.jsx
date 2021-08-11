import React from "react";
import "../assets/footer.css";

export default function Footer() {
  return (
    <div>
      <div className="navFooter">
        <div className="nav-container">
          <h2 className="headerFooter">BAGIAN DARI:</h2>
          <div className="imglogo">
            <a href="https://jakarta.block71.co/">
              <img
                className="kotakode"
                src="https://www.kotakode.com/static/media/block71.f06f3442.svg"
                alt="block71"
              />
            </a>
            <a href="https://startup.google.com/">
              <img
                className="google"
                src="https://www.kotakode.com/static/media/Google_for_Startups_logo.3a4b3b10.svg"
                alt="google"
              />
            </a>
          </div>
        </div>
        <div className="nav-container">
          <h2 className="headerFooter">PRODUK</h2>
          <ul>
            <li className="footerLink">
              <a href="#">Pertanyaan</a>
            </li>
            <li className="footerLink">
              <a href="#">Blog</a>
            </li>
            <li className="footerLink">
              <a href="#">Pengguna</a>
            </li>
            <li className="footerLink">
              <a href="#">Events</a>
            </li>
            <li className="footerLink">
              <a href="#">Partnership</a>
            </li>
          </ul>
        </div>
        <div className="nav-container">
          <h2 className="headerFooter">PERUSAHAAN</h2>
          <ul>
            <li className="footerLink">
              <a href="#">About</a>
            </li>
            <li className="footerLink">
              <a href="#">FAQ</a>
            </li>
            <li className="footerLink">
              <a href="#">Rules</a>
            </li>
            <li className="footerLink">
              <a href="#">Legal</a>
            </li>
          </ul>
        </div>
        <div className="nav-container">
          <h2 className="headerFooter">HUBUNGI KAMI</h2>
          <p className="mailto">
            <a href="mailto:petertanugraha@kotakode.com">
              petertanugraha@kotakode.com
            </a>
          </p>
        </div>
      </div>
      <div className="footerWrap">
        <p>PT. Kota Digital Nusantara</p>
        <p>Copyright 2020 Kotakode. All rights reserved</p>
        <p>Made with ❤️ in 🇮🇩</p>
      </div>
    </div>
  );
}
