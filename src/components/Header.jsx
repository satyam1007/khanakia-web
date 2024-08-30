import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkStyle = "hover:text-[#147efb] duration-200";

  return (
    <div className="shadow">
      <div className="flex flex-row justify-between items-center py-4">
        <div className="pl-5 mb-4 sm:mb-0" id="container">
          <Link
            to=""
            className="flex text-black font-medium items-center gap-2 tracking-widest text-xl from-inherit"
          >
            <img
              src="https://www.khanakia.com/wp-content/uploads/2021/02/logo.png"
              alt="logo.png"
            />
            KHANAKIA
          </Link>
        </div>
        <div className="hidden md:flex pr-5" id="pagesLinks">
          <li className="list-none">
            <NavLink
              to="/CaseStudies"
              className={({ isActive }) =>
                `text-md duration-200 pl-10 font-sans font-semibold hover:text-[#f0592b] ${
                  isActive ? `text-[#f0592b]` : `text-black`
                }`
              }
            >
              Case Studies
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/Services"
              className={({ isActive }) =>
                `text-md duration-200 pl-10 font-sans font-semibold hover:text-[#f0592b] ${
                  isActive ? `text-[#f0592b]` : `text-black`
                }`
              }
            >
              Services
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                `text-md duration-200 pl-10 font-sans font-semibold hover:text-[#f0592b] ${
                  isActive ? `text-[#f0592b]` : `text-black`
                }`
              }
            >
              About Us
            </NavLink>
          </li>

          <button className="pl-10">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `bg-black py-3 px-6 rounded-full text-white font-bold hover:bg-yellow-300 hover:text-black duration-300 ${
                  isActive ? `hidden` : ``
                }`
              }
            >
              Contact{" "}
            </NavLink>
          </button>
        </div>

        <button
          className="block md:hidden pr-5 pb-3 cursor-pointer"
          id="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src="/hamburger.svg" alt="hamburger" />
        </button>
      </div>
      {/* Mobile Menu with Sliding Effect and Cross Icon Inside */}
      <nav
        className={`md:hidden fixed inset-0 bg-[#f9f9f9] transform ${
          isMenuOpen ? `translate-x-0` : `-translate-x-full`
        } transition-transform duration-300 ease-in-out z-40`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex justify-end p-4">
          <button
            className="block md:hidden pr-1 pb-3 pt-2 cursor-pointer"
            id="menu-toggle"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src="/closeNav.svg" alt="closeNav" />
          </button>
        </div>
        <ul className="flex justify-center items-center flex-col space-y-10 text-2xl font-medium mt-32">
          <li className="cursor-pointer">
            <NavLink
              to="/CaseStudies"
              className={({ isActive }) =>
                `text-md duration-200 p-0 font-sans font-semibold hover:text-[#f0592b] ${
                  isActive ? `text-[#f0592b]` : `text-black`
                }`
              }
            >
              Case Studies
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/Services"
              className={({ isActive }) =>
                `text-md duration-200 p-0 font-sans font-semibold hover:text-[#f0592b] ${
                  isActive ? `text-[#f0592b]` : `text-black`
                }`
              }
            >
              Services
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                `text-md duration-200 p-0 font-sans font-semibold hover:text-[#f0592b] ${
                  isActive ? `text-[#f0592b]` : `text-black`
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `text-md duration-200 p-0 font-sans font-semibold hover:text-[#f0592b] ${
                  isActive ? `text-[#f0592b]` : `text-black`
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>{" "}
    </div>
  );
}

export default Header;
