import React from "react";

const Parts = ({ total }) => {
  const Total = total.reduce(
    (Value, currentValue) => Value + currentValue.exercises,
    0
  );

  return (
    <div>
      <p>Total of {Total} exercises</p>
    </div>
  );
};

export default Parts;
