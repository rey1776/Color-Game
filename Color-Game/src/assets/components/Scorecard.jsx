import React, { useState } from "react";
import MyTable from "./MyTable";

function Scorecard({scorecard}) {
//   const [scorecard, setScorecard] = useState([true, false, true, true]);

  return (
    <div className="scorecard">
      <h1>Scorecard</h1>
      <MyTable answer={scorecard} />
    </div>
  );
}

export default Scorecard;
