import React, { useRef ,useState } from 'react'
import axios from 'axios'
import { useNavigate , Link } from "react-router-dom";
export default function Add() {
  const navigate = useNavigate();
  let assignedTo = useRef();
  let status = useRef();
  let dueDate = useRef();
  let priority= useRef();
  let comments= useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/api/tasks`, formData)
      .then((response) => {
        console.log(response.data);
        alert("Tasks added successfully!!");
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  const [formData, setFormData] = useState({
    assignedTo: 'User 1',
    status: 'Not Started',
    dueDate: '',
    priority: 'Normal',
    comments: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="bg-white shadow p-5 rounded w-100" style={{ maxWidth: '800px' }}>
        <h2 className="text-center mb-4">New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="assignedTo"><span style={{ color: 'red' }}>*</span>Assigned To</label>
              <select
                id="assignedTo"
                className="form-select"
                value={formData.assignedTo}
                onChange={handleInputChange}
              >
                <option>User 1</option>
                <option>User 2</option>
                <option>User 3</option>
                <option>User 4</option>


                {/* Add more user options if necessary */}
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="status"><span style={{ color: 'red' }}>*</span>Status</label>
              <select
                id="status"
                className="form-select"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                id="dueDate"
                className="form-control"
                value={formData.dueDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="priority"><span style={{ color: 'red' }}>*</span>Priority</label>
              <select
                id="priority"
                className="form-select"
                value={formData.priority}
                onChange={handleInputChange}
              >
                <option>Normal</option>
                <option>High</option>
                <option>Low</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="comments">Description</label>
            <textarea
              id="comments"
              className="form-control"
              value={formData.comments}
              onChange={handleInputChange}
              rows="4"
            />
          </div>
          <div className="d-flex justify-content-end">
            <Link to="" className="btn btn-warning me-2">Cancel</Link>
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}