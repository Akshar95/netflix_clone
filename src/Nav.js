import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav nav__black">
      <div className="nav__container">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
      <h1>this is the nav</h1>
    </div>
  );
}

export default Nav;
