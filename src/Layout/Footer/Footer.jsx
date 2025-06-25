import React from "react";
import { Link, NavLink } from "react-router";

import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const menu = (
    <>
      {" "}
      <NavLink to={"/"}>
        {" "}
        <li>Home</li>
      </NavLink>
      <NavLink to={"addtask"}>
        {" "}
        <li>Add Task</li>
      </NavLink>
      <NavLink to={"browse-tasks"}>
        {" "}
        <li>Browse Tasks</li>
      </NavLink>
      <NavLink to={"my-posted-tasks"}>
        {" "}
        <li>My Posted Tasks</li>
      </NavLink>
    </>
  );
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 dark:bg-gray-800 dark:text-white">
      <div className="flex gap-2">
        <Link to={"/"}>
          <h2 className="text-2xl text-green-600 font-bold">
            Freelance<span className="text-red-600">Marketplace</span>
          </h2>
        </Link>
      </div>
      <ul className="flex gap-8">{menu}</ul>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/me___mithun/" target="_blank">
            <BiLogoInstagramAlt size={28} />
          </a>
          <a href="https://www.linkedin.com/in/mahmudul41/" target="_blank">
            <FaLinkedin size={25} />
          </a>
          <a href="https://www.facebook.com/mithun8441" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
