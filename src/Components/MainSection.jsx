import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBlogs } from "../helpers/getBlogs";

const MainSection = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs()
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <section className="py-20 bg-purple-500 min-h-[100vh] flex flex-col-reverse md:flex-row justify-between gap-5 items-center px-10">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-4xl md:text-7xl text-white capitalize">
            {blogs[0]?.title}
          </h2>
          <p className="text-xl text-white lg:w-[65vw]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, ab
            adipisci totam illum repellat at explicabo repellendus fuga a
            necessitatibus. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quasi nihil, obcaecati nulla officia minus eligendi
            repellendus delectus, quod unde, tempora sed saepe expedita
            temporibus! Beatae optio voluptatum veniam! Ad, perferendis.{" "}
          </p>
          <hr />
          <div className="flex gap-3">
            {blogs[0]?.tags?.map((tag, i) => (
              <span className="text-sm bg-white rounded-3xl px-3 py-2 capitalize font-semibold">
                {tag}
              </span>
            ))}
          </div>
          <Link
            to={`/blog/1234`}
            className="px-8 py-2 md:text-xl text-sm bg-white rounded-xl w-fit text-blue-500 font-semibold"
          >
            Read Now
          </Link>
        </div>

        <div>
          <img
            src="/img.jpg"
            alt="study"
            className="md:w-[40vw] w-[75vw] mt-14 md:mt0 mt rounded-3xl shadow-2xl"
          />
        </div>
      </section>
    </>
  );
};

export default MainSection;
