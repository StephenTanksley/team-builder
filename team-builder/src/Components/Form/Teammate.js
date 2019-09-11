import React from "react";
import styled from 'styled-components'
import "../../App.css"

const Card = styled.div`

  display: flex;
  width: 20%;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;

 
  :hover {
      border: .1rem solid gray;
      box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      transform: scale(1.0125)
    }

`

function Teammate(props) {
  return (
    <Card>
      {props.team.map((teammate, index) => (
        <div className="teammate" key={index}>
          <h2>{teammate.name}</h2>
          <p>{teammate.role}</p>
          <p>{teammate.email}</p>
          <div className="button-container">
            <br />
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </Card>
  );
}

export default Teammate;



//Edit functionality: 

// Use a router and useEffect. 
