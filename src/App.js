import './App.css';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';

function App() {

  const [notes, setNotes] = useState([]);

  return (
    <div className="App">

    <Sidebar notes = {notes}/>
    <Main />

    </div>
  );
}

export default App;
