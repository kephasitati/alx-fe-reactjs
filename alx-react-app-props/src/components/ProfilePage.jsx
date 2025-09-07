import UserInfo from './UserInfo';

function ProfilePage() {
  return (
    <div
      style={{
        margin: '10px',
        padding: '15px',
        backgroundColor: '#e6f3ff',
        borderRadius: '5px',
      }}
    >
      <h2
        style={{
          color: '#2c3e50',
          fontSize: '22px',
          margin: '0 0 10px 0',
        }}
      >
        User Profile Page
      </h2>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;