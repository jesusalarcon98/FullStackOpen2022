import React from "react";
import Parts from "./Parts";

const Content = ({ content }) => (
  <div>
    {content.map((content) => (
      <Parts
        key={content.id}
        parts={content.name}
        exercises={content.exercises}
      />
    ))}
  </div>
);

export default Content;
