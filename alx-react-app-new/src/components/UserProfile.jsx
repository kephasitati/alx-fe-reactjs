import PropTypes from 'prop-types';

const UserProfile = (props) => {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '10px',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        maxWidth: '400px',
      }}
    >
      <h2
        style={{
          color: 'blue',
          fontSize: '24px',
          margin: '0 0 10px 0',
        }}
      >
        {props.name}
      </h2>
      <p
        style={{
          fontSize: '16px',
          margin: '5px 0',
        }}
      >
        Age:{' '}
        <span
          style={{
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          {props.age}
        </span>
      </p>
      <p
        style={{
          fontSize: '16px',
          color: '#555',
          margin: '5px 0',
        }}
      >
        Bio: {props.bio}
      </p>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  bio: PropTypes.string.isRequired,
};

export default UserProfile;