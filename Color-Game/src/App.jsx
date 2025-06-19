import { useState } from 'react'
import Scorecard from "./assets/components/Scorecard";
import Footer from "./assets/components/Footer";
import DisplayQuestion from "./assets/components/DisplayQuestion";
import './App.css'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
        <Typography color='primary' align="center" variant="h1" sx={{ mb: 2 }}>
          Color Game
        </Typography>
        <div className='container'>
        <DisplayQuestion addResults={addScore}/>
        <Scorecard scorecard={scorecard}/> 
        </div>
        <Footer />
        
      </div>
  )
}

export default App
