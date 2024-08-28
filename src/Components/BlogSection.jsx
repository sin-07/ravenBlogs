import React from "react";
import BlogCard from "./BlogCard";
import { useEffect, useContext } from "react";
import { getBlogs } from "../helpers/getBlogs";
import BlogContext from "../context/BlogContext";
import { convertDate } from "../helpers/convertDate";

const BlogSection = () => {
  const { blogs, setBlogs } = useContext(BlogContext);

  useEffect(() => {
    getBlogs()
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err.message));
  });

  return (
    <>
      <div className="py-5 my-10 md:px-24 w-fit min-h-[100vh] mx-3 md:mx-auto flex flex-col md:flex-row justify-around items-center lg:gap-8">
        <div className="flex flex-col gap-3 w-fit md:w-[35%] mb-2 rounded-2xl shadow-md mx-auto">
          <h2 className="text-3xl font-bold mx-5 capitalize">
            {blogs[1]?.title.length > 23
              ? blogs[1]?.title.slice(0, 23) + "..."
              : blogs[1]?.title}
          </h2>
          <img
            src={blogs[1]?.thumbnail}
            alt="study"
            className="md:w-[40vw] rounded-b-2xl shadow-lg"
          />
          <div className="flex gap-3 px-5 py-2">
            {blogs[1]?.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 text-gray-600 text-xs md:text-sm rounded-full font-semibold capitalize bg-white shadow-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <hr className="mx-5" />
          <div className="mx-5 flex justify-start gap-2 items-center">
            <img
              src="./logo.jpg"
              alt=""
              className="rounded-sm md:w-[40px] w-[50px] md:h-[5%] h-[55px]"
            />
            <div>
              <h3 className="font-semibold ">{blogs[1]?.author}</h3>
              <p className="font-semibold ">
                {convertDate(blogs[1]?.createdAt)}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:overflow-y-scroll md:h-[80vh]">
          {blogs?.slice(2).map((blog) => (
            <BlogCard key={blog._id} {...blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
