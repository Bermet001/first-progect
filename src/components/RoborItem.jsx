import React from "react";

const RobotItem = ({ onClick, image, firstName, email, gender, carModel }) => {
  return (
    <div onClick={onClick} className="container">
      <img src={image} alt="personImage" />
      <h1>{firstName}</h1>
      <p>
        <strong>{email}</strong>
      </p>
      <p>{gender}</p>
      <span>{carModel}</span>
    </div>
  );
};
export default RobotItem;
