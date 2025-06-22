import React, { useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ClearIcon from '@mui/icons-material/Clear';

function MyComponent() {
  return (
    <span style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}>
      {"\u2713"}
    </span>
  );
}

function RedX() {
  return (
    <span style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
      &times;
    </span>
  );
}

function MyTable(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {props.answer.map((element, index) => (
            <tr key={index}>
              <td>{"Q. " + (index + 1)}</td>
              <td>{element ? <CheckCircleIcon color={'success'}/> : <CancelIcon sx={{ color: 'red' }}/>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;
