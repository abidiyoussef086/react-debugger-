import React, { useState } from 'react';
import './UserCard.css';

// UserCard Component - HAS ISSUES
const UserCard = ({ user, onDelete }) => {
  // Issue 1: Missing key validation (key should be added in parent component)
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`user-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="user-card-header">
        <img 
          src={user.avatar} 
          alt={user.name}
          className="user-avatar"
        />
        <h3>{user.name}</h3>
      </div>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      {/* Issue 2: Wrong prop name being passed - should be user.role not user.position */}
      <p>Role: {user.position || 'N/A'}</p>
      <button 
        onClick={() => onDelete(user.id)}
        className="delete-btn"
      >
        Delete User
      </button>
    </div>
  );
};

export default UserCard;