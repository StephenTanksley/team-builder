import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import Form from './Components/Form/Form'
import Teammate from './Components/Form/Teammate'
import styled from 'styled-components'
import './App.css';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.5rem;
  padding: 1.5rem;
  justify-content: space-around;

`

function App() {
  const [team, setTeam] = useState([]); 
  
  const [memberToEdit, setMemberToEdit] = useState({})
  //We're setting this to an empty object because each team member needs to be a unique object.


  return (
    <div className="App">
      <h1>Teammate Directory</h1>
      <div className = "form-container">
        <Form 
          team={team} 
          setTeam={setTeam}
          memberToEdit={memberToEdit}
          setMemberToEdit = {setMemberToEdit} />
      </div>

      <Container>
        <Route path="/member-card" render={(props) => (
          <Teammate team={team} />
        )} />
      </Container>
    </div>
  );
}

export default App;


//Only thing the App is going to do is render my routes. 

//Add team member would have a 