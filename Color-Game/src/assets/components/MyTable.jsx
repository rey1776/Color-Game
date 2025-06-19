import React, { useState } from "react";

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
              <td>{element ? MyComponent() : RedX()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;
