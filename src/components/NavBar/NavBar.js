import React from "react";
import "./NavBar.css";
import { MdOutlineCoronavirus, MdInfoOutline } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";

export default function NavBar() {
  return (
    <div className="navigation">
      <div className="logo">
        <MdOutlineCoronavirus />
      </div>
      <ul className="links-list">
        <li className="link">
          <a target="blank" href="https://github.com/Janzunec/covstats-19">
            <RiGithubLine />
          </a>
        </li>
        <li className="link">
          <MdInfoOutline />
        </li>
      </ul>
    </div>
  );
}
