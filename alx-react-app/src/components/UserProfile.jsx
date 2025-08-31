import PropTypes from 'prop-types';
import './UserProfile.css';

const UserProfile = ({ name, age, bio }) => {
    return (
        <div className="user-profile">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    );
};

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    bio: PropTypes.string.isRequired,
};

export default UserProfile;