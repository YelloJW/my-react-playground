import React from "react";

const Header = props => {
  console.log(props.user.profile);
  return (
    <div className="header">
      <h1 className="title">Run With Me</h1>
      <h2 className="athlete">
        {props.user.firstname} {props.user.lastname}
      </h2>
      <img
        className="picture"
        src={props.user.picture}
        alt={`${props.user.firstname} ${props.user.lastname}`}
      />
    </div>
  );
};

export default Header;
