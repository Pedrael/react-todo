import logo from './logo.svg';
import './App.scss'

import React from "react"
import MСlassComponent from './MClass'
import MainLayout from './MainLayoutFolder/MainLayout'

function App() {

  const numbers = [1, 2, 3]

  return (
    <div className="App">
      <MainLayout />
    </div>
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      //   {numbers.map((number) => {
      //     return <MСlassComponent key = {number} external={"ExternalString" + number} />
      //   })}
      // </header>
    // </div>
  );
}

export default App;
