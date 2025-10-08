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
    <nav className="shadow bg-white">
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
          <button className="flex gap-2 items-center font-bold text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-3 px-4 rounded">
            <GrGithub /> Contribute
          </button>
        </div>

        <div
          className="md:hidden text-3xl cursor-pointer text-[#632EE3]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-[#632EE3]">
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
              <button className="w-full flex justify-center gap-2 items-center font-bold text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-3 px-4 rounded">
                <GrGithub /> Contribute
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
