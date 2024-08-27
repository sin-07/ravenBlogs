import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdAccountCircle, MdDelete, MdEdit } from "react-icons/md";
import BlogCard from "../Components/BlogCard";

const Blog = () => {
  const { id } = useParams();
  const [userAuth, setUserAuth] = useState(false);
  return (
    <>
      <section>
        <nav className="p-5 border-b-2 flex gap-2 bg-slate-200">
          <Link
            to="/"
            className="font-semibold flex justify-center items-center gap-2 text-gray-500 hover:text-black transition-all duration-300 ease-in-out"
          >
            <AiFillHome /> <span>Home</span>
          </Link>
          /<span className="cursor-pointer">Education system scam</span>
        </nav>

        <div className="flex mx-5 gap-3 md:gap-5 flex-col md:flex-row">
          <div className="w-full md:w-[60vw] bg-white mx-auto p-5 rounded-lg my-10">
            <h1 className="text-4xl font-bold my-5">Education</h1>
            <img
              src="/img.jpg"
              alt=""
              className="w-full h-[40vh] object-cover rounded-2xl shadow-md"
            />
            <div className="flex gap-2 my-5">
              <span className="px-4 py-2 text-gray-600 text-xs md:text-sm bg-white rounded-full font-semibold shadow-md capitalize">
                Programming
              </span>
              <span className="px-4 py-2 text-gray-600 text-xs md:text-sm bg-white rounded-full font-semibold shadow-md capitalize">
                Coding
              </span>
            </div>
            <hr />
            <div className="my-5">
              <p className="overflow-x-clip">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique impedit fuga quisquam in mollitia unde autem sunt non,
                voluptates rem commodi iste eveniet a qui nobis? Ipsa iste ab
                nesciunt, repellendus atque amet recusandae quos suscipit
                necessitatibus voluptate aspernatur, beatae reprehenderit saepe
                tenetur! Soluta unde fuga porro dolor voluptatem tempora saepe
                nulla sint ad quaerat nemo alias commodi sapiente vel illum
                provident, corporis id ea reiciendis accusantium veniam. Veniam
                expedita similique ea id laborum unde repellendus nulla iusto
                provident fugiat error incidunt sit enim atque accusantium sed,
                cupiditate architecto minus veritatis in itaque nihil culpa
                voluptatem? Porro excepturi velit perspiciatis?
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 text-base">
              <img
                src="/logo.jpg"
                alt=""
                className="rounded-full w-[40px] h-[40px]"
              />
              <div>
                <h4 className="font-bold">Coding</h4>
                <p className="font-bold">26/06/2024</p>
              </div>
            </div>
          </div>
          <div className="my-10">
            <h3 className="text-3xl font-semibold text-gray-600 ml-3">
              More Blog
            </h3>
            <div className=" grid grid-cols-1 gap-2 md:h-[80vh] md:overflow-y-scroll md:py-2 md:pb-2 scroll-hide my-3">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>

            <h3 className="text-3xl text-gray-600 ml-3">Comment</h3>
            <div>
              <div className="flex flex-col justify-between items-start gap-2 my-4">
                {userAuth ? (
                  <img
                    src="/logo.jpg"
                    alt=""
                    className="rounded-full w-[40px] h-[40px]"
                  />
                ) : (
                  <MdAccountCircle className="w-[40px] h-[40px] text-gray-600 text-3xl" />
                )}
                <div>
                  <textarea
                    name="message"
                    id="message"
                    rows="2"
                    className="md:w-[35vw] rounded-lg py-2 outline-none shadow-md text-base px-3"
                  ></textarea>
                  <div className="flex gap-3">
                    <button className="bg-purple-500 hover:bg-purple-700 transition-all duration-500 ease-linear text-white px-3 py-1 rounded-lg">
                      AddComment
                    </button>

                    <button className="bg-purple-500 hover:bg-purple-700 transition-all duration-500 ease-linear text-white px-3 py-1 rounded-lg">
                      {!userAuth ? "Sign in with Google" : "sign out"}
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col md:flex-row justify-start items-center md:gap-3 my-3">
                  <img src="/logo.jpg" alt="" className="rounded-full hidden md:block w-[50px] text-gray-600"/>
                  <div className="bg-white w-fullmd:w-[35vw] rounded-lg py-2 text-sm px-3 shadow-md">
                    <div className="flex justify-between">
                      <span className="text-xs font-bold md:text-sm">
                        yeti
                      </span>
                      <div className="flex gap-1 ">
                        <MdEdit className="text-gray-500 hover:text-purple-500 transition-all ease-in-out cursor-pointer hover:scale-105"/>
                        <MdDelete className="text-gray-500 hover:text-purple-500 transition-all ease-in-out cursor-pointer hover:scale-105"/>
                      </div>
                    </div>
                    <p className={`outline-none bg-gray-100 shadow-inner rounded-md my-2 transition-all duration-500 ease-in-out`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos, voluptates.
                    </p>
                    <button className="bg-purple-500 hover:bg-purple-600 px-3 py-1 text-sm text-white rounded-lg">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
