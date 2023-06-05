import React, { useState } from "react";
import data from './users.json';
import { Container } from "react-bootstrap";

const ListUser = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [filteredUsers, setFilteredUsers] = useState(data);

  const handleStatusChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedStatus(selectedValue);
    console.log(selectedValue)

    if (selectedValue === "inactive") {
      const filtered = data.filter(user => { return !user.Status });
      setFilteredUsers(filtered);
    } else if (selectedValue === "active") {
      const filtered = data.filter(user => { return user.Status });
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(data);
    }

  };


  return (
    <Container fluid>
      <div className="d-flex justify-content-between">
        <a href="#">Download Json file</a>
        <p>Logout</p>
      </div>

      <div className="status">
        <select name="status" value={selectedStatus} onChange={handleStatusChange}>
          <option value="all">Select status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="list">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FIRST NAME</th>
              <th scope="col">LAST NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">GENDER</th>
              <th scope="col">COLOR</th>
              <th scope="col">STATUS</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <th scope="row">
                  <img src={user.Avatar} className="p-1 bg-gray-300 rounded-full" alt={index} />
                </th>
                <td>{user?.first_name}</td>
                <td>{user?.last_name}</td>
                <td>{user?.email}</td>
                <td>{user?.gender}</td>
                <td>{user?.color}</td>
                <td>{user?.Status ? "Active" : "Inactive"}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default ListUser;