import React from "react"; //funciona todo bien de momento
import Course from "./components/Course";

const App = ({ course }) => {
  return (
    <div>
      <ul>
        {console.log(course[0])}
        {course.map((course) => (
          <Course key={course.id} course={course} />
        ))}
        {/* const contentarr = course.map((courses) => courses.parts)
         */}
      </ul>
    </div>
  );
};

export default App;
