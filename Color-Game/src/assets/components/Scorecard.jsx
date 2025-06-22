import React, { useState } from "react";
import MyTable from "./MyTable";
import Typography from '@mui/material/Typography';


function Scorecard({scorecard}) {
//   const [scorecard, setScorecard] = useState([true, false, true, true]);

  return (
    <div className="scorecard">
      <Typography color='primary' align="center" variant="h4" component="h1" sx={{ mb: 2 }}>
         Scorecard
        </Typography>
      
      <MyTable answer={scorecard} />
    </div>
  );
}

export default Scorecard;
