import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/UI/Demo/DemoOutput';




function App() {

  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);


  

  const toggleP = useCallback(() => {
    if(allowToggle){
      setShowP((prev) => !prev);
    }
  }, [allowToggle]);

  const allowToffleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP}/>
      <Button onClick={allowToffleHandler}>allow toggling</Button>
      <Button onClick={toggleP}>toggle</Button>

    </div>
  );
}

export default App;
