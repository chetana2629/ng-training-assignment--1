import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faSearch } from '@fortawesome/free-solid-svg-icons';
import EditTaskModal from './EditTaskModal';
import { Link } from 'react-router-dom';

 // Import the modal component

export default function List() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null); // Track the task to be edited

  
  const getTasks = () => {
    axios.get('http://localhost:8080/api/tasks')
      .then((response) => {
        setTasks(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (task) => {
    setTaskToEdit(task); // Set the selected task to be edited
    setShowModal(true);  // Show the modal
  };

  const handleDelete = (id) => {
    console.log('Deleting task with ID:', id);
    axios.delete(`http://localhost:8080/api/tasks/${id}`)
      .then((response) => {
        // Assuming the response.data contains the updated tasks list after deletion
        // Alternatively, you can remove the deleted task from the local state manually
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
       
        alert("Do you want to delete task {{task.name}}"); // Optional: alert to confirm deletion
      })
      .catch((error) => {
        console.log(error);
        alert("Error deleting the task."); // Optional: alert for error
      });
  };
  
  useEffect(() => {
    getTasks();
    
  }, []);

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faTasks} className="text-danger me-2" size="2x" />
            <div>
              <h5 className="mb-0">Tasks</h5>
              <small className="text-muted">All Tasks</small>
              
            </div>
          </div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <Link to="/add"><button type="button" className="btn btn-primary">New Task</button></Link>
            <Link to="/list"><button type="button" className="btn btn-primary">Refresh</button></Link>
          </div>
        </div>
        <div className="position-relative" style={{ marginLeft: 'auto' }}>
          <input type="text" placeholder="Search" className="form-control" />
          <FontAwesomeIcon icon={faSearch} className="position-absolute" style={{ right: '10px', top: '10px', color: '#6c757d' }} />
        </div>

    
        
      </nav>

      <div className="container mt-3 mb-3">
        <div className="row mt-3 mb-3">
          <table className="table">
            <thead>
              <tr>
              <th scope="col">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </th>
               
                <th>Assigned To</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Comments</th>
              
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                }</td>
                  <td>{task.assignedTo}</td>
                  <td>{task.status}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.priority}</td>
                  <td>{task.comments}</td>
                  <td>
                    {/* Edit/Delete Dropdown */}
                    <div className="dropdown">
                      <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button className="dropdown-item" onClick={() => handleEdit(task)}>
                            Edit
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" onClick={() => handleDelete(task.id)}>
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
              
      <div className="pagination">
        <select className="page-size">
          <option value="10">10</option>
          <option value="20" selected>20</option>
          <option value="50">50</option>
        </select>
        <div style={{ marginLeft: '595px' }}>
          <button type="button" className="first-page">First</button>
          <button type="button" className="prev-page">Prev</button>
          <input type="number" className="page-number" value="1" min="1" />
          <button type="button" className="next-page">Next</button>
          <button type="button" className="last-page">Last</button>
        </div>
      </div>

      {/* Render the Edit Modal */}
      {showModal && (
        <EditTaskModal
        show={showModal}
        onClose={() => setShowModal(false)}
        task={taskToEdit} // Pass the selected task to the modal
    
        />


      )}
    </>
  );
}
