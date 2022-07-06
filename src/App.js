import './App.css';
import TopBar from './Components/TopBar/TopBar';
import MainDisplay from './Components/MainDisplay/MainDisplay';
// import BottomBar from './Components/BottomBar/BottomBar';
import { useState, useEffect } from 'react'

function App() {
  const [pageToDisplay, setPageToDisplay] = useState("Home")
  
  function handleScroll(e) {
    console.log(e)
  }

  return (
    <div id='app' onScroll={handleScroll}>
      <TopBar onCloudClick={setPageToDisplay} onSunClick={setPageToDisplay}/>
      <MainDisplay pageToDisplay={pageToDisplay}/>
      <div id='bottom-bar'/>
    </div>
  );
}

export default App;
