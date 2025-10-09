import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { GrGithub } from "react-icons/gr";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router";
import { NavLink } from "react-router";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Apps", path: "/apps" },
  { id: 3, name: "Installation", path: "/installation" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeLink = ({ isActive }) =>
    `cursor-pointer hover:text-[#632EE3] transition-colors duration-200 ${
      isActive ? "text-[#632EE3] underline font-bold" : "hover:underline"
    }`;

  return (
    <nav className="shadow bg-white px-5">
      <div className="container mx-auto w-[95%] flex justify-between items-center py-4">
        <Link to="/" className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="w-10" />
          <h1 className="font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            APPS GALAXY
          </h1>
        </Link>

        <ul className="hidden md:flex gap-8 list-none font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className={activeLink}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <a
            href="https://github.com/hadialhamza"
            target="_blank"
            className="btn border-none flex gap-2 items-center font-bold text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-3 px-4 hover:scale-105 transition-all duration-300 rounded"
          >
            <GrGithub /> Contribute
          </a>
        </div>

        <div
          className="md:hidden text-3xl cursor-pointer text-[#632EE3]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      <div
        className={`md:hidden absolute left-0 right-0 z-10 bg-white shadow-inner transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 font-medium text-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:text-[#632EE3] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              <NavLink to={link.path} className={activeLink}>
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/hadialhamza"
              target="_blank"
              className="btn border-none w-full flex justify-center gap-2 items-center font-bold text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-3 px-4 rounded hover:scale-105 transition-all duration-300"
            >
              <GrGithub /> Contribute
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
