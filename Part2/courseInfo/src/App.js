import React from "react"; //funciona todo bien de momento
import Course from "./components/Course";

const App = ({ course }) => {
  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
