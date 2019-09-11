import React, { useState } from 'react';
import Form from './Components/Form/Form'
import Teammate from './Components/Form/Teammate'
import './App.css';




function App() {
  const [team, setTeam] = useState([
    {
      name: "",
      role: "",
      email: ""
  }
]); 
  //We're setting this to an empty object because each team member needs to be a unique object.


  return (
    <div className="App">
      <h1>Teammate Directory</h1>
      <div className = "form-container">
        <Form team={team} setTeam={setTeam} />
      </div>

      <div className = "card-container">
        <Teammate team={team} />
      </div>
    </div>
  );
}

export default App;