import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CourseCard from "../components/Card/CourseCard";

const Home = () => {
  const data = useSelector((state) => state.courses.courses.slice(0, 6));

  return (
    <div className="p-6 min-h-dvh bg-gray-50">
      <div className="flex py-12 justify-center items-center">
        <div className="text-center max-w-5xl px-6">
          <p className="text-sm font-medium tracking-widest text-purple-600 uppercase">
            Welcome
          </p>
          <h1 className="my-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Education at Your Fingertips
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-base text-gray-600 md:text-lg">
            Unlock your potential with our expert-led online courses. Learn at
            your own pace with top-notch resources tailored to fit your goals.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mt-8 md:flex-row">
            <Link
              to="/courses"
              className="text-center rounded-lg py-3 px-6 bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition-all"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-12">
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-gray-800">Courses</h3>
          <p className="text-gray-600 text-lg border-b pb-2">
            Browse through our curated selection of courses
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((item, index) => (
            <CourseCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
