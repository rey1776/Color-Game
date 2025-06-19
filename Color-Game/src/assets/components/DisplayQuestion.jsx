import React, {useState, useEffect} from "react";

function DisplayQuestion({addResults}) {
  
    const answers = [{ id: 1, question:"Green", a:"Green", b:"Blue", c: "Orange", d:"Brown"} ];
    const [revealAnswers, setRevealAnswers] = useState(false);

const rainbowStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    background: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
    backgroundSize: "400% 100%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "rainbow 3s infinite linear",
    };
                
    function revealColorName(event){
        const answer = event.target.id;
        const question = event.target.name;
        if(answer === question){
            console.log("Correct");
            addResults(true);           
        } else{
            console.log("Incorrect");
            addResults(false);
        }
        setRevealAnswers("true");
    }

  return (
    <div>
        <h1>{answers.map((element) => (
            (<div key={element.id} >
                <h1 style={rainbowStyle}>Q1. {element.question}</h1><div >
            <button id={element.a} name={element.question} onClick={revealColorName} style={{backgroundColor: element.a, color:'White'}}>{revealAnswers && element.a }</button>
            <button id={element.b} name={element.question} onClick={revealColorName} 
            style={{backgroundColor: element.b, color:'White'}}>{revealAnswers && element.b}</button>
            <button id={element.c} name={element.question} onClick={revealColorName} 
            style={{backgroundColor: element.c, color:'White'}}>{revealAnswers && element.c}</button>
            <button id={element.d} name={element.question} onClick={revealColorName} 
            style={{backgroundColor: element.d, color:'White'}}>{revealAnswers && element.d}</button></div>
            </div>)
        ))}</h1>    
    </div>
  );
}

export default DisplayQuestion;
