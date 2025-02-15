import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CourseCard from "../components/Card/CourseCard";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  let data = useSelector((state) => state.courses.courses);
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const id = setTimeout(() => {
      if (text.trim() === "") {
        setResult([]);
        return;
      }
      const res = data.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setResult(res);
    }, 500);
    return () => clearTimeout(id);
  }, [text]);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="relative max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search courses..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-3 text-sm border rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-purple-400"
        />
        {result.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-1 z-10">
            {result.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/courses/${item.id}`)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200 transition"
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-semibold border-b-2 pb-2 mb-6">
          All Courses
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.map((course, index) => (
            <div
              key={index}
              onClick={() => navigate(`/courses/${course.id}`)}
              className="cursor-pointer transition-transform transform hover:scale-105"
            >
              <CourseCard item={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
