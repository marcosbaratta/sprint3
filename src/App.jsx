import "./App.css";
import Header from "./Header.jsx";
import List from "./List";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light')
  return (

    <div className={'dark-mode'}>
      <Header mode={mode} setMode={setMode} />
      <List  modo={mode}/>
      <div className={mode=='dark'? "prueba" : ''}></div>
      </div>
      

  );
}

export default App;
