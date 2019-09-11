import React, { useState } from 'react';
import styled from 'styled-components'



const Wrapper = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 1.5rem;
`


const Form = props => { //We're creating a new function here.
    console.log(props)
    const initialState = { name: "", role: "", email: "" }; //we're setting the initial value of our state here.
    const [newTeammate, setNewTeammate] = useState(initialState); //We're setting our state to use the initial value.


    const handleChange = event => { 
      setNewTeammate({
      ...newTeammate, 
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!newTeammate.name || !newTeammate.role || !newTeammate.email) {
      alert("Please fill out all fields!");
    } else {
      props.setTeam([newTeammate, ...props.team]); // This will be coming once we get to App.
      resetForm();
      }
    };
  
  const resetForm = () => {
    setNewTeammate(initialState);
  };

    return (
      <form onSubmit={handleSubmit}>
        <div className = "item-container">
          <Wrapper>
            <label>
              Name: 
              <input 
                type="text"
                name="name"
                onChange={handleChange}
                value={newTeammate.name}
                />
            </label>
          </Wrapper>
          
          <Wrapper>
            <label>
              Role: 
              <input 
                type="text"
                name="role"
                onChange={handleChange}
                value={newTeammate.role} 
                />

                {/*This doesn't look quite right yet. When you add this function, it technically works but the form drop-down box is all squished. */}
              {/* <select size="4" name="role" onChange={handleChange} value={newTeammate.role}>
                  <option value="DevOps"></option>
                  <option value="Front-End Developer"></option>
                  <option value="Back-End Developer"></option>
                  <option value="Member Experience"></option>
                </select> */}


            </label>
          </Wrapper>

          <Wrapper>
            <label>
              Email: 
              <input 
                type="email" required
                name="email" 
                onChange={handleChange}
                value={newTeammate.email}  
                />
            </label>
          </Wrapper>

          <Wrapper>
            <button type = "submit">Submit</button>
          </Wrapper>
          <Wrapper>
            <button type="button" onClick={resetForm}>Reset</button>
          </Wrapper>
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

  // 4)  We should be able to delete a card once we have it in state.



  //Create a new route for the edit portion. When you create the link on the component itself