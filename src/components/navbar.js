import React from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1 >
        Clicky Game
      </h1>
      <div className="col sm6">
              <h1>Right: {props.right}</h1>
      </div>
      <div className="col sm6">
              <h1>Wrong: {props.wrong}</h1> 
      </div>
    </nav>
  );
};

export default NavBar;
