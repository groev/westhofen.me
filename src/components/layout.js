import React from "react";
import Logo from "../img/logo.svg";
import LogoWhite from "../img/logo-white.svg";
import Github from "../img/github.svg";
import Linked from "../img/linked.svg";

export default function layout(props) {
  return (
    <div className="page">
      <header>
        <img src={Logo} className="logo" alt="Logo" />
        <nav className="toolbar">
          <a
            className="external"
            href="https://github.com/groev"
            target="_blank"
          >
            <img src={Github} alt="Github" />
          </a>
          <a
            className="external"
            href="https://www.linkedin.com/in/magnus-westhofen-a87a77138/"
            target="_blank"
          >
            <img src={Linked} alt="Linked" />
          </a>
          <a className="contact" href="mailto:magnus@westhofen.me">
            Say hello!
          </a>
        </nav>
      </header>
      <main>{props.children}</main>
      <footer>
        <img src={LogoWhite} />
        <br />
        ©2020 - Magnus Westhofen
      </footer>
    </div>
  );
}
