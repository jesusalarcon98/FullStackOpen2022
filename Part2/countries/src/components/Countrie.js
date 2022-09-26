import React from "react";
import DetailCountry from "./DetailCountry";

const Countrie = ({ countrie }) => {
  return (
    <div>
      <div>
        {countrie.name.common}

      </div>
    </div>
  );
};
export default Countrie;
