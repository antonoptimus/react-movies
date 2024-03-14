import React from "react";

export default function Header() {
  return (
    <nav className="blue-grey darken-1">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="collapsible.html">GitHub</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
