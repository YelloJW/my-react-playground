import React from "react";

const Activity = props => {
  return (
    <tr
      className={
        props.selectedActivityId === props.id ? "selected" : "activity"
      }
      onClick={() => props.selectActivity(props.id)}
    >
      <td>{props.startDate}</td>
      <td>{props.type}</td>
      <td>{props.name}</td>
      <td>{props.distance}</td>
      <td>{props.elapsedTime}</td>
      <td>{props.averageSpeed}</td>
      <td>{props.totalElevationGain}</td>
    </tr>
  );
};

export default Activity;
