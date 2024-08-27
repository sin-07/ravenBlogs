import React, { useState } from "react";
import { useContext } from "react";
import BlogContext from "../context/BlogContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { checkAuth } from "../helpers/checkAuth";
import AdminNavbar from "../Components/AdminNavbar";
import CreateBlog from "../Components/CreateBlog";

const Admin = () => {
  const { isAuth, setIsAuth } = useContext(BlogContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username: e.target.username.value,
        password: e.target.password.value,
      });
      const data = await res.data;
      toast.success(data.message);
      setIsAuth(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    checkAuth()
      .then((data) => setIsAuth(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      {!isAuth ? (
        <div>
          <div className="h-screen flex justify-center items-center">
            <form
              onSubmit={handleLogin}
              action=""
              className="grid grid-cols-1 gap-3 bg-white w-full md:w-[25vw] rounded-lg px-2"
            >
              <div className="flex flex-col">
                <label
                  htmlFor="username"
                  className="text-lg font-semibold text-gray-600"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter username"
                  required
                  className="rounded-2xl py-2 text-center outline-none shadow-md bg-gray-100"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-lg font-semibold text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  required
                  className="rounded-2xl py-2 text-center outline-none shadow-md bg-gray-100"
                />
              </div>
              <button
                type="submit"
                className="bg-purple-500 rounded-2xl px-3 py-1 font-semibold h text-gray-100 hover:bg-purple-600 transition-all duration-300 ease-in-out"
              >
                LogIN
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <AdminNavbar />
          <CreateBlog/>
        </div>
      )}
    </>
  );
};

export default Admin;
