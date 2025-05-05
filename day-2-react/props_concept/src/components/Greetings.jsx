import React from "react";

const Greetings = ({ name, timeIfDay }) => {
  return (
    <div>
      <h2>
        Good {timeIfDay}, {name}
      </h2>
    </div>
  );
};

export default Greetings;
