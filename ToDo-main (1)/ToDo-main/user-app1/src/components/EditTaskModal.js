import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditTaskModal({ show, onClose, task }) {
  const [a_assignedTo, setAssignedTo] = useState('');
  const [s_status, setStatus] = useState('');
  const [d_dueDate, setDueDate] = useState('');
  const [p_priority, setPriority] = useState('');
  const [c_comments, setComment] = useState('');

  useEffect(() => {
    if (task) {
      setAssignedTo(task.assignedTo);
      setStatus(task.status);
      setDueDate(task.dueDate);
      setPriority(task.priority);
      setComment(task.comments);
    }
  }, [task]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/tasks/${task.id}`, {
      assignedTo: a_assignedTo,
      status: s_status,
      dueDate: d_dueDate,
      priority: p_priority,
      comments: c_comments
    }).then((response) => {
      console.log(response.data);
      onClose(); // Close the modal after successful update
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      {show && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Task</h5>
                <button type="button" className="btn-close" onClick={onClose}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                      <label className="form-label" htmlFor="assignedTo">Assigned To</label>
                      <select id="assignedTo" className="form-select" value={a_assignedTo} onChange={(e) => setAssignedTo(e.target.value)}>
                        <option>User 1</option>
                        <option>User 2</option>
                        <option>User 3</option>
                        <option>User 4</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label" htmlFor="status">Status</label>
                      <select id="status" className="form-select" value={s_status} onChange={(e) => setStatus(e.target.value)}>
                        <option>Not Started</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label" htmlFor="dueDate">Due Date</label>
                      <input type="date" id="dueDate" className="form-control" value={d_dueDate} onChange={(e) => setDueDate(e.target.value)} />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label" htmlFor="priority">Priority</label>
                      <select id="priority" className="form-select" value={p_priority} onChange={(e) => setPriority(e.target.value)}>
                        <option>Normal</option>
                        <option>High</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="comments">Description</label>
                    <textarea id="comments" className="form-control" rows="4" value={c_comments} onChange={(e) => setComment(e.target.value)} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
