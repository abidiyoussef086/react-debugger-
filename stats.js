import React from 'react';
import './Statistics.css';

const Statistics = ({ users }) => {
  const totalUsers = users.length;
  const averageAge = totalUsers > 0 
    ? users.reduce((sum, user) => sum + user.age, 0) / totalUsers 
    : 0;
  
  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <div className="stats-content">
        <p>Total Users: {totalUsers}</p>
        <p>Average Age: {totalUsers > 0 ? averageAge.toFixed(1) : 'N/A'}</p>
        <p>Adult Users: {users.filter(u => u.age >= 18).length}</p>
      </div>
    </div>
  );
};

export default Statistics;