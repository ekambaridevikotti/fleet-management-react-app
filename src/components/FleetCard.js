import React from "react";

const FleetCard = ({ fleet, onUpdateDriver, onToggle, onDelete }) => {
  console.log("Rendered:", fleet.regNo);

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <img
        src="https://via.placeholder.com/150"
        alt="vehicle"
        width="100%"
      />
      <p>Reg No: {fleet.regNo}</p>
      <p>Category: {fleet.category}</p>
      <p>Driver: {fleet.driver}</p>
      <p>Status: {fleet.status}</p>

      <button onClick={() => onUpdateDriver(fleet.id)}>Update Driver</button>
      <button onClick={() => onToggle(fleet.id)}>Toggle Status</button>
      <button onClick={() => onDelete(fleet.id)}>Delete</button>
    </div>
  );
};

export default React.memo(FleetCard);
