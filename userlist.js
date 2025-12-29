import UserCard from './UserCard';
import './UserList.css';

const UserList = ({ users, onDeleteUser }) => {
  const activeUsers = users;
  
  return (
    <div className="user-list">
      <h2>User Directory</h2>
      <div className="user-grid">
        {activeUsers.map(user => (
          <UserCard 
            key={user.id}
            user={user} 
            onDelete={onDeleteUser}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;