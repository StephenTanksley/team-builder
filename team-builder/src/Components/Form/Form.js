import React, { useState } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 1.5rem;
`


const Form = props => { //We're creating a new function here.
    const initialState = { name: "", role: "", email: "" }; //we're setting the initial value of our state here.
    const [newTeammate, setNewTeammate] = useState(initialState); //We're setting our state to use the initial value.
  
   
    const resetForm = () => {
      setNewTeammate(initialState);
    };

    const handleChange = event => { 
      setNewTeammate({...newTeammate, [event.target.name]: event.target.value

    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!newTeammate.name || !newTeammate.role || !newTeammate.email) {
      alert("Please fill out all fields!");
    } else {
      props.setNewTeammate([newTeammate, ...props.team]); // This will be coming once we get to App.
      resetForm();
    }
  };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className = "item-container">
          <Wrapper>
          <label>
            Name: 
            <input type="text" />
          </label>
          </Wrapper>
          
          <Wrapper>
          <label>
            Role: 
            <input type="text" />{/*This could be either text or something else. TBD */}
          </label>
          </Wrapper>

          <Wrapper>
          <label>
            Email: 
            <input type="email" required /> {/*Makes this field require an email address.*/}
          </label>
          </Wrapper>

          <button>Submit</button>
        </div>
      </form>
    );
  };
  
  export default Form;


//MVP

  // 1) We need to have a few things. We need 1) Input fields for name, 
  // an input field for role, 
  // and an input field for email.
  

  // 2) We should render each of those objects we push into state into a card that we can see.

  
//STRETCH

  // 3)  We should be able to edit the cards. We'll need to figure out how to select individual items from state.App
