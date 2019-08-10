import React from "react";

export default function Course({ course }) {
  return (
    <div className="columns">
      <div className="course__image column">
        <img src="https://via.placeholder.com/250" alt="" />
      </div>
      <div className="course__content column is-three-quarters">
        <h2 className="course__title title">{course.title}</h2>
        <div className="course__description">
          <p>{course.description}</p>
        </div>
      </div>
    </div>
  );
}
