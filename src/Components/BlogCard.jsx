import React from "react";
import { Link } from "react-router-dom";
import { convertDate } from "../helpers/convertDate";

const BlogCard = ({ thumbnail, title, tags, _id, createdAt, author }) => {
  return (
    <>
      <Link
        to={`/blog/${_id}`}
        className="relative flex flex-col md:flex-row py-2 md:py-2 gap-2 justify-start items-center md:px-3 rounded-2xl  md:rounded-3xl shadow-md bg-slate-100 w-full h-fit mb-1"
      >
        <img
          src={thumbnail}
          alt=""
          className="md:w-[20vw] rounded-2xl md:rounded-3xl"
        />
        <div className="px-3 md:px-0">
          <h3>{title?.length > 30 ? title.slice(0, 30) + "..." : title}</h3>
          <div className="flex gap-3 px-5 py-2">
            {tags?.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 text-gray-600 text-xs md:text-sm rounded-full font-semibold capitalize bg-white shadow-md"
              >
                {tag}
              </span>
            ))}

            
          </div>
          <hr className="my-3" />
          <div className="mx-5 flex justify-start gap-2 items-center">
            <img
              src="/logo.jpg"
              alt=""
              className="rounded-sm md:w-[40px] w-[50px] md:h-[5%] h-[55px]"
            />
            <div>
              <h3 className="font-semibold ">{author}</h3>
              <p className="font-semibold ">{convertDate(createdAt)}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
