import React, { useEffect, useState } from "react";

import Course from "./Course";

import { CourseService } from "../services/courseService";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getCourses();
  }, []);

  async function getCourses() {
    try {
      const data = await CourseService.getCourses();
      setCourses(data);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  function handleSearch(e) {
    // const filtered = courses.filter(c =>
    //   c.title.toLowerCase().match(e.target.value.toLowerCase())
    // );

    // setCourses(filtered);
    setFilter(e.target.value);
  }

  return (
    <>
      <div className="control has-icons-left has-icons-right mb-2">
        <input
          className="input is-medium"
          type="email"
          placeholder="Search courses"
          onChange={handleSearch}
        />
        <span className="icon is-left">
          <i className="fas fa-envelope" />
        </span>
        <span className="icon is-right">
          <i className="fas fa-check" />
        </span>
      </div>
      {courses.length
        ? courses.map(c =>
            c.title.toLowerCase().match(filter.toLowerCase()) ? (
              <Course key={c.id} course={c} />
            ) : (
              ""
            )
          )
        : "Loading.."}
    </>
  );
}
