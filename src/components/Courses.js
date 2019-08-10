import React from "react";

function Courses() {
  return (
    <div className="columns">
      <div className="course__image column">
        <img src="https://via.placeholder.com/250" alt="" />
      </div>
      <div className="course__content column">
        <h2 className="course__title title">Title</h2>
        <div className="course__description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis
            mollitia perspiciatis esse provident culpa earum! Laborum, omnis
            numquam modi aut quibusdam quasi consequuntur, cumque, accusamus
            amet distinctio soluta molestias!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Courses;
