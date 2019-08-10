import React, { useState, useEffect } from "react";

import Course from "./Course";

import { CourseService } from "../services/courseService";
import { ModuleService } from "../services/moduleService";

export default function CourseView(props) {
  const [course, setCourse] = useState(null);
  const [modules, setModules] = useState(null);
  const { match } = props;
  const courseId = match.params.courseId;

  useEffect(() => {
    getCourse();
    getModules();
  }, []);

  async function getCourse() {
    try {
      const data = await CourseService.getCourse(courseId);
      setCourse(data);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  async function getModules() {
    try {
      const data = await ModuleService.getModules(courseId);
      setModules(data);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  return (
    <div>
      {course ? (
        <>
          <Course course={course} />
          <div className="list is-hoverable">
            {modules
              ? modules.length
                ? modules.map(m => (
                    <a className="list-item" key={m.id}>
                      {m.title}
                    </a>
                  ))
                : "No modules"
              : "Loading..."}
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
