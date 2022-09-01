import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => (
  <div>
    {course.map((course) => (
      <div key={course.id}>
        <Header header={course.name} />
        <Content content={course.parts} />
        <Total total={course.parts} />
      </div>
    ))}
  </div>
);

export default Course;
