import React from "react";
import "../styles/nav.css"
import MenuList from "./MenuItems";

export default function Navbar() {
    const [theme, setTheme] = React.useState("dark")

    const darkModeSwitch = () => {
        document.body.classList.toggle("light-mode")
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    let themeModeIcon = theme === "light" ? <i className="far fa-moon"></i> : <i className="far fa-sun"></i>

    return (
      <nav>
        <div className="logo-btn">
          <a href="https://ixroy13.tech/">
            <h1>Ixroy</h1>
          </a>
        </div>
        <div className="menu-list">
          <MenuList />
        </div>
        <div className="nav-btns">
          <button
            className="btn-deafult theme-switch primary-btn"
            onClick={darkModeSwitch}
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
          >
            {themeModeIcon}
            <span className="sr-only">Dark/Light mode switch</span>
          </button>

          <button
            title="Personal information"
            className="btn-deafult primary-btn"
            href="#"
          >
            <i className="far fa-user"></i>
            <span className="sr-only">My personal information</span>
          </button>

          <button className="button btn-deafult menu-toggle" aria-expanded="false">
            <svg
              fill="var(--button-color)"
              className="hamburger"
              viewBox="0 0 100 100"
              width="30"
            >
              <rect
                className="line top"
                width="80"
                height="10"
                x="10"
                y="25"
                rx="5"
              ></rect>
              <rect
                className="line middle"
                width="80"
                height="10"
                x="10"
                y="45"
                rx="5"
              ></rect>
              <rect
                className="line bottom"
                width="80"
                height="10"
                x="10"
                y="65"
                rx="5"
              ></rect>
            </svg>

            <span className="sr-only">Menu toggle</span>
          </button>
        </div>
      </nav>
    );
}
            
