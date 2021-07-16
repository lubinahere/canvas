import React from 'react';
import logo from './logo.svg';
import './App.css';
import Drawing from './draw/Draw';
import Drawings from './draw/Drawings';

const App = () => {

  const [showDraw, setShowDraw] = React.useState(false);
  const toggleDraw = () => setShowDraw(!showDraw);

  return (
    <React.Fragment>
      <button onClick={toggleDraw} >New</button>
      {showDraw ? <Drawing close={toggleDraw} /> : <Drawings />}
    </React.Fragment>
  );
}

export default App;
