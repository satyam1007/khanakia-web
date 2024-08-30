import React from "react";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="bg-black text-white px-8 pb-28">
        <div className="first-footer mx-4 md:mx-10 my-8 md:my-16 font-muli md:pl-8">
          <h1 className="pt-8 md:pt-16 mb-0 text-3xl md:text-6xl">
            Our practice is built
            <br />
            around your needs
          </h1>
          <p className="text-base md:text-lg pt-4">
            Let us take the weight of product development off your shoulders and
            <br />
            boost your digital presence.
          </p>
          <button className="btn-last mt-4 rounded-full bg-yellow-300 text-black hover:bg-white transition duration-300 py-3 md:py-4 px-6 md:px-8 text-lg md:text-xl font-medium">
            LET'S TALK
          </button>
        </div>

        <div
          className="last-footer flex flex-wrap justify-around items-center mt-16 md:mt-40 font-muli"
          id="footer-col"
        >
          <div className="first-column p-2">
            <p className="text-base md:text-lg pb-2">
              Reach Out @{" "}
              <span className="span-1 text-gray-400">+91 1122334455</span>
            </p>
            <p className="text-base md:text-lg pb-2">
              <a
                href="mailto:satyammishradeveloper@gmail.com"
                className="hover:underline"
              >
                satyammishradeveloper@gmail.com
              </a>
            </p>
            {/* <i className="fab fa-facebook-square text-base md:text-lg text-gray-400 mt-4 md:mt-8"></i> */}
            <li className="flex items-center gap-4 pb-2">
              <a href="https://www.instagram.com/satyam07.dev/">
                <FaInstagramSquare className="cursor-pointer text-3xl" />
              </a>

              <a href="https://github.com/satyam1007">
                <FaGithubSquare className="cursor-pointer text-3xl" />
              </a>
            </li>
            <p className="text-sm">2024 Khanakia. All rights reserved.</p>
          </div>
          <div className="second-column mt-8 md:mt-0">
            <ul>
              <h3 className="text-lg md:text-xl mb-2">Services</h3>
              <li className="mb-2 font-light">
                <Link
                  to="#"
                  className="text-white hover:text-[#f0592b] duration-300"
                >
                  Software Development
                </Link>
              </li>
              <li className="mb-2 font-light">
                <Link
                  to="#"
                  className="text-white hover:text-[#f0592b] duration-300"
                >
                  Website Development
                </Link>
              </li>
              <li className="mb-2 font-light">
                <Link
                  to="#"
                  className="text-white hover:text-[#f0592b] duration-300"
                >
                  Mobile Development
                </Link>
              </li>
              <li className="mb-2 font-light">
                <Link
                  to="#"
                  className="text-white hover:text-[#f0592b] duration-300"
                >
                  Digital Marketing
                </Link>
              </li>
              <li className="mb-2 font-light">
                <Link
                  to="#"
                  className="text-white hover:text-[#f0592b] duration-300"
                >
                  Analytics
                </Link>
              </li>
              <li className="mb-2 font-light">
                <Link
                  to="#"
                  className="text-white hover:text-[#f0592b] duration-300"
                >
                  IT support and maintenance
                </Link>
              </li>
            </ul>
          </div>
          <div className="third-column mt-8 md:mt-0">
            <ul>
              <h3 className="text-lg md:text-xl mb-2">Site Links</h3>
              <li className="mb-2 font-light">
                <Link
                  to="/CaseStudies"
                  className="text-white hover:text-[#f0592b] duration-300"
                >
                  Case Studies
                </Link>
              </li>
              <li className="mb-2 font-light">
                <Link
                  to="/AboutUs"
                  className="text-white hover:text-[#f0592b] duration-300"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2 font-light">
                <Link
                  to="/Services"
                  className="text-white hover:text-[#f0592b] duration-300"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2 font-light">
                <Link
                  to="#"
                  className="text-white hover:text-[#f0592b] duration-300"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2 font-light">
                <Link
                  to="/Contact"
                  className="text-white hover:text-[#f0592b] duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="fourth-column mt-8 md:mt-0">
            <ul>
              <li className="text-sm md:text-base text-white hover:text-[#f0592b] duration-300 mb-2 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="text-sm md:text-base text-white hover:text-[#f0592b] duration-300 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
