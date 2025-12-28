import { useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FleetCard from "../components/FleetCard";

const Admin = () => {
  const [fleets, setFleets] = useState([]);

  const addFleet = (fleet) => {
    setFleets((prev) => [...prev, fleet]);
  };

  const updateDriver = useCallback((id) => {
    const name = prompt("Enter new driver name");
    if (!name || !name.trim()) return;

    setFleets((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, driver: name } : f
      )
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              status: f.status === "Available" ? "Unavailable" : "Available",
            }
          : f
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (!window.confirm("Are you sure?")) return;

    setFleets((prev) => prev.filter((f) => f.id !== id));
  }, []);

  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar addFleet={addFleet} />

        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
          {fleets.map((fleet) => (
            <FleetCard
              key={fleet.id}
              fleet={fleet}
              onUpdateDriver={updateDriver}
              onToggle={toggleAvailability}
              onDelete={deleteFleet}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
