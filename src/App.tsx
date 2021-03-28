import React from 'react';
import Modal from "./components/Modal"
import logo from './logo.svg';
import './App.css';

function App() {

  const [toggleModal,setToggleModal] = React.useState(false)
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={()=>setToggleModal(true)}>Open form</button>
        <Modal 
        customButton={true} 
        customButtonTitle={"true"} 
        // theme="dark"
        title="Form"
        open={toggleModal}
        setOpen={setToggleModal}
        customButtonCallback={()=>{alert("clciked")}}>
        
         <h1>Form</h1>
         <h3>Please wait loading your form</h3>
       
        </Modal>
      </header>
    </div>
  );
}

export default App;
