import React from "react";
import RobotItem from "./RoborItem";
import { Users } from "../constants/users";

const RobotsList = () => {
  const showId = (id) => {
    alert(id);
  };

  return (
    <div className="mainContainer">
      {Users.map((user, id) => {
        return <RobotItem onClick={() => showId(id)} key={id} {...user} />;
      })}
    </div>
  );
};

export default RobotsList;
