import React from "react"; //funciona todo bien de momento
import ReactDOM from "react-dom";

const Part = (props) => {
  //Constante que hace que al componente CONTENT solo se le pase 1 ejercicio y ahí pueda hacerlo con los 3
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};
const Header = (props) => {
  //constante que hace que el componentente HEAD se le pase el curso
  return <h1> {props.course}</h1>;
};
const Content = (props) => {
  //Constante que habla al componente PART el cual se usa 1 solo componente 3 veces
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );
};
const Total = (props) => {
  //Constante que hace que el componente tome los 3 ejercicios y los suma.
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
