import React from "react";

const AdminNavbar = () => {
  return (
    <>
      <div>
        <nav className="bg-purple-500 p-4 mx-auto flex justify-between items-center shadow-lg">
          <a href="/" className="text-white font-bold text-2xl">
            Raven
          </a>
          <ul className="flex space-x-4 font-thin">
            <li
              className={`hover:text-gray-700 transition-all ease-in-out cursor-pointer duration-500`}
            >
              All Blogs
            </li>
            <li
              className={`hover:text-gray-700 transition-all ease-in-out cursor-pointer duration-500`}
            >
              Create Blogs
            </li>
            <li
              className={`hover:text-gray-700 transition-all ease-in-out cursor-pointer duration-500`}
            >
              LogOut
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default AdminNavbar;
