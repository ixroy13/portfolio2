import React from "react";
import "./footer.css";
import MenuList from "../MenuItems";

export default function Footer() {
  return (
    <footer>
      <div className="nav-links">
        <MenuList />
      </div>
      <div className="socials">
        <div className="gh">
          <a href="https://github.com/ixroy13" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="ig">
          <a href="https://www.instagram.com/olek.pal/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="fb">
          <a href="https://www.instagram.com/olek.pal/" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className="contact">
        <p>© 2024 IXROY Corp.</p>
      </div>
    </footer>
  );
}
