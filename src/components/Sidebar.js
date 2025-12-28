import { useState } from "react";

const Sidebar = ({ addFleet }) => {
  const [form, setForm] = useState({
    regNo: "",
    category: "",
    driver: "",
    status: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { regNo, category, driver, status } = form;
    if (!regNo || !category || !driver || !status) {
      alert("All fields required");
      return;
    }

    addFleet({
      id: Date.now(),
      ...form,
    });

    setForm({ regNo: "", category: "", driver: "", status: "" });
  };

  return (
    <div>
      <h4>Add Fleet</h4>

      <input name="regNo" placeholder="Vehicle Reg No" value={form.regNo} onChange={handleChange} />
      <br />

      <select name="category" value={form.category} onChange={handleChange}>
        <option value="">Select Category</option>
        <option>Auto</option>
        <option>Car</option>
        <option>Truck</option>
        <option>Bus</option>
      </select>
      <br />

      <input name="driver" placeholder="Driver Name" value={form.driver} onChange={handleChange} />
      <br />

      <select name="status" value={form.status} onChange={handleChange}>
        <option value="">Status</option>
        <option>Available</option>
        <option>Unavailable</option>
      </select>
      <br />

      <button onClick={handleSubmit}>Add Fleet</button>
    </div>
  );
};
export default Sidebar;
