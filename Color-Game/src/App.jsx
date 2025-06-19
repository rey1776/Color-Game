import { useState } from 'react'
import Scorecard from "./assets/components/Scorecard";
import Footer from "./assets/components/Footer";
import DisplayQuestion from "./assets/components/DisplayQuestion";
import './App.css'

function App() {

  const [scorecard, setScorecard] = useState([]);

  function addScore(newScore){
    setScorecard(prev => {
      return[
        ...prev, newScore
      ]
    });
  }
  
    return (
      <div>
        <div className='container'>
        <DisplayQuestion addResults={addScore}/>
        <Scorecard scorecard={scorecard}/> 
        </div>
        <Footer />
      </div>
  )
}

export default App
