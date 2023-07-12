import React from "react";
import "../styles/footer.css"
import MenuList from "./MenuItems";

export default function Footer() {
    return (
        <footer>
            <div className="nav-links">
                <MenuList />
            </div>
            <div className="socials">
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
                <div className="gh">
                    <a href="https://github.com/ixroy13" target="_blank">
                        <i className="fab fa-github"></i>    
                    </a>
                </div>
                <div className="tt">
                    <a href="https://twitter.com/olekpal" target="_blank">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
            <div className="contact">
                <p>© 2023 IXROY Corp.</p>
            </div>
        </footer>
    )
}