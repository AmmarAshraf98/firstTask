import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);

  return (
    <nav
      className={`bg-[#2C3E50] fixed start-0 z-50 right-0 top-0 transition-[padding] duration-500 text-white ${
        isScroll ? "py-4" : "py-8"
      }`}
    >
      <div className='container px-2 sm:px-0 flex items-center justify-between mx-auto'>
        <div className='logo'>
          <Link to='' className='text-3xl uppercase font-bold'>
            start framework
          </Link>
        </div>

        <button className='sm:hidden text-white'>
          <i className='fas fa-bars'></i>
        </button>

        <div className={`hidden sm:block`}>
          <ul className='center'>
            <li>
              <NavLink className='rounded-md px-2 py-1 capitalize' to='about'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className='rounded-md px-2 py-1 capitalize'
                to='portfolio'
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink className='rounded-md px-2 py-1 capitalize' to='contact'>
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
