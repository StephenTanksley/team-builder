import React from "react";

function Teammate(props) {
  return (
    <>
      {props.team.map((teammate, index) => (
        <div className="teammate" key={index}>
          <h2>{teammate.name}</h2>
          <p>{teammate.role}</p>
          <p>{teammate.email}</p>
        </div>
      ))}
    </>
  );
}

export default Teammate;



//Edit functionality: 

// Use a router and useEffect. 