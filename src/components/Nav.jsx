import React, { useState } from "react";
import darkMod from "../assets/photos/dark-mode.png";


function Nav() {
  const [isDark, setIsDark] = useState(false);
  function handleMenu() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    console.log(hamburgerMenu);
    if (hamburgerMenu.style.display === "flex") {
      hamburgerMenu.style.display = "none";
    } else {
      hamburgerMenu.style.display = "flex";
    }
  }
  function handelDarkMod() {
    if (isDark) {
      document.querySelector("body").style.backgroundColor = "rgb(184, 184, 184)";
      setIsDark(false);
    } else {
      document.querySelector("body").style.backgroundColor = "#323232";
      setIsDark(true);
    }
  }
  return (
    <>
      <nav>
        <a href="/">
          <h1>M Naga</h1>
        </a>
        <ul className="nav-ul">
          <li>
            <a href="/">
              {" "}
              <h1>Home</h1>
            </a>
          </li>
          <li>
            <a href="/">
              <h1>About</h1>
            </a>
          </li>
          <li>
            <a href="/">
              <h1>Contacts</h1>
            </a>
          </li>
        </ul>
        <img
          className="hamburger-img"
          src="https://img.icons8.com/ios-filled/50/FA5252/xbox-menu.png"
          alt="menu"
          onClick={() => handleMenu()}
        />
        <img
          className="dark-mod-img "
          src={darkMod}
          alt="menu"
          onClick={() => handelDarkMod()}
        />
      </nav>
      <div className="hamburger-menu">
        <ul className="hamburger-ul">
          <li>
            <a href="/">
              {" "}
              <h1>Home</h1>
            </a>
          </li>
          <li>
            <a href="/">
              <h1>About</h1>
            </a>
          </li>
          <li>
            <a href="/">
              <h1>Contacts</h1>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
