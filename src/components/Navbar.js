import React from "react";
import "../styles/nav.css"
import MenuList from "./MenuItems";

export default function Navbar() {
    const [theme, setTheme] = React.useState("dark")
    const [isOpened, setIsOpened] = React.useState(false)

    function changeMenuState() {
      setIsOpened(prevValue => !prevValue)
    }

    const darkModeSwitch = () => {
        document.body.classList.toggle("light-mode")
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    let themeModeIcon = theme === "light" ? <i className="far fa-moon"></i> : <i className="far fa-sun"></i>

    function openInfoBox() {
      document.querySelector(".info-box").classList.toggle("box-open")
      document.body.classList.toggle("fixed-position")
    }

    return (
      <nav className="main-nav">
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
            onClick={openInfoBox}
            title="Personal information"
            className="btn-deafult primary-btn info-btn"
          >
            <i className="far fa-user"></i>
            <span className="sr-only">My personal information</span>
          </button>

          <button
            onClick={changeMenuState}
            className="button btn-deafult menu-toggle"
            aria-expanded={isOpened}
          >
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
            
