import React, { useEffect } from "react";

import Course from "./Course";

import { CourseService } from "../services/courseService";

function Courses() {
  useEffect(() => {
    getCourses();
  }, []);

  async function getCourses() {
    try {
      const data = await CourseService.getCourses();
      console.log(data);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  return (
    <>
      <div className="control has-icons-left has-icons-right">
        <input className="input is-medium" type="email" placeholder="Email" />
        <span className="icon is-left">
          <i className="fas fa-envelope" />
        </span>
        <span className="icon is-right">
          <i className="fas fa-check" />
        </span>
      </div>
      <Course />
    </>
  );
}

export default Courses;
