import React from "react";
import { useState } from "react"

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants';


const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between item-center">
      <img src={logo} alt="hoobank"
      className="w-[124px] h-[32px]"
      />

      <ul>
        
      </ul>
    </nav>
  )
}

export default Navbar