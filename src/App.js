import logo from './logo.svg';
import './App.css';
import Mainpage from './Components/Mainpage';
import Page2 from './Components/Page2';
import { useState } from 'react';

function App() {
  const [selected,setSelected] = useState("electronics jewelery men's clothing women's clothing")
  return (
    <div className="App">
      <Mainpage setSelected={setSelected}/>
      <Page2 selected={selected}/>
    </div>
  );
}

export default App;
