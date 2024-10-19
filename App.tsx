import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [issues, setIssues] = useState([]); // State for all issues

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      setIsAdmin(true);
    } else {
      setIsAuthenticated(true);
      setIsAdmin(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  const updateIssueStatus = (id: number, newStatus: string) => {
    setIssues(prevIssues =>
      prevIssues.map(issue =>
        issue.id === id ? { ...issue, status: newStatus } : issue
      )
    );
  };

  return (
    <div>
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : isAdmin ? (
        <AdminDashboard issues={issues} onUpdateStatus={updateIssueStatus} onLogout={handleLogout} />
      ) : (
        <Dashboard issues={issues} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
