import './App.css';
import TopBar from './Components/TopBar/TopBar';
import MainDisplay from './Components/MainDisplay/MainDisplay';
import { useState } from 'react'
import BottomBar from './Components/BottomBar/BottomBar';

function App() {
  const [pageToDisplay, setPageToDisplay] = useState("Home")

  return (
    <div id='app'>
      <TopBar onCloudClick={setPageToDisplay} onSunClick={setPageToDisplay}/>
      <MainDisplay pageToDisplay={pageToDisplay}/>
      {/* <div id='bottom-bar'><div className='pixelart'></div></div> */}
      <BottomBar />
    </div>
  );
}

export default App;
