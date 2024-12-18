import React, { useState } from 'react';
import tsocLogo from '../assets/TSOC logo.png';
import ArrowFrame from '../assets/ArrowFrame.png';
import MobileNavbar from './MobileNavbar';
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='flex justify-between items-center lg:h-[100px] px-9 py-5'>
        <div className='logo'>
          <img src={tsocLogo} alt="TSOC Logo" />
        </div>

        {/* Hamburger Icon */}
        <div
          className='customlg:hidden flex items-center'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-2 cursor-pointer">
            <span className="block w-8 h-0.5 bg-gray-800"></span>
            <span className="block w-8 h-0.5 bg-gray-800"></span>
            <span className="block w-8 h-0.5 bg-gray-800"></span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className='hidden customlg:block'>
          <ul className='menue list-none flex justify-center items-center gap-12'>
            <li>
              <NavLink
                to="/mentors"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-800"
                }
              >
                Mentors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/how-it-works"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-800"
                }
              >
                How it works
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-800"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-800"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-800"
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/code-of-conduct"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-800"
                }
              >
                Code of Conduct
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hire-from-us"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-800"
                }
              >
                Hire from Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Button */}
        <div className='button hidden customlg:block'>
          <button
            className="w-[157px] h-[50px] px-[20px] py-[11px] gap-[10px] rounded-tl-[6px] bg-[#0060E7] opacity-100 text-white"
          >
            <span className='flex justify-center gap-2 items-center'>
              Click Me <img src={ArrowFrame} alt="->" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isMenuOpen && <MobileNavbar />}
    </>
  );
}

export default Navbar;
