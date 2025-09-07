import { useContext } from 'react';
import UserContext from '../../UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '10px 0',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        maxWidth: '400px',
      }}
    >
      <p
        style={{
          fontSize: '16px',
          margin: '5px 0',
        }}
      >
        Name: <span style={{ fontWeight: 'bold', color: 'blue' }}>{userData.name}</span>
      </p>
      <p
        style={{
          fontSize: '16px',
          margin: '5px 0',
          color: '#555',
        }}
      >
        Email: {userData.email}
      </p>
    </div>
  );
}

export default UserDetails;