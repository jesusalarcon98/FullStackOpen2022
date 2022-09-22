import React from "react";

const Countrie = ({ index, countrie }) => {
  return (
    <div>
      <div index={index}>{countrie.name.common}</div>
    </div>
  );
};
export default Countrie;
