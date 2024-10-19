import React from 'react';

const Dashboard = ({ issues, onLogout }) => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <button onClick={onLogout}>Logout</button>
      {/* Render user issues here */}
      {issues.map(issue => (
        <div key={issue.id}>
          <h3>{issue.title}</h3>
          <p>{issue.description}</p>
          <p>Status: {issue.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
