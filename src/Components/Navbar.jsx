import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="shadow-md flex flex-col md:flex-row items-center justify-between px-3 py-4 rounded-b-2xl fixed top-0 right-0 left-0 backdrop-blur-sm z-50">
      <h1 className="text-2xl font-bold md:mb-0 mb-2 text-yellow-300">myBlog</h1>
      <div className="flex items-center justify-center gap-2">
        <FaSearch className="text-xl text-white"/>
        <input
          type="Search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search Blog Here"
          className="bg-transparent text-center md:w-full w-[85%] border-b-2 px-2 border-white text-white focus:outline-none focus:border-yellow-300 transition-all duration-300 ease-in-out"
        />
      </div>
    </nav>
  );
};

export default Navbar;
