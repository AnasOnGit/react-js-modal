import React from 'react';
import Modal from "./components/Modal"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Modal 
        customButton={true} 
        customButtonTitle={"true"} 
        customButtonCallback={()=>{alert("clciked")}}>
        
          <form>
          <input type="text"/>
          <input type="text" id="fname" name="fname" value="John" />
          <input type="text" id="lname" name="lname" value="Doe"/>
          <input type="submit" value="Submit"/>
        </form>
       
        </Modal>
      </header>
    </div>
  );
}

export default App;
