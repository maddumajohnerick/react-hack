import React from "react";
import { Link } from "react-router-dom";

export default function Course({ course }) {
  return (
    <div className="course__container columns">
      <div className="course__image column">
        <Link to={`/course/${course.id}`}>
          <img src={course.image} alt="" />
        </Link>
      </div>
      <div className="course__content column is-three-quarters">
        <Link to={`/course/${course.id}`}>
          <h2 className="course__title title">{course.title}</h2>
        </Link>
        <div className="course__description">
          <p>{course.description}</p>
        </div>
      </div>
    </div>
  );
}
