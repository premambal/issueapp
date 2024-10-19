import React, { useState } from 'react';

const AdminDashboard = ({ issues, onUpdateStatus, onLogout }) => {
  const [comment, setComment] = useState('');

  const handleStatusChange = (id, newStatus) => {
    onUpdateStatus(id, newStatus);
  };

  const handleAddComment = (id) => {
    console.log(`Added comment to issue ${id}: ${comment}`);
    setComment(''); // Clear comment after adding
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={onLogout}>Logout</button>
      {issues.map(issue => (
        <div key={issue.id}>
          <h3>{issue.title}</h3>
          <p>{issue.description}</p>
          <p>Status: {issue.status}</p>
          <select onChange={(e) => handleStatusChange(issue.id, e.target.value)}>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
          <input
            type="text"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={() => handleAddComment(issue.id)}>Add Comment</button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
