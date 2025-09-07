import PropTypes from 'prop-types';
import './UserProfile.css';

const UserProfile = (props) => {
    return (
        <div className="user-profile">
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    bio: PropTypes.string.isRequired,
};

export default UserProfile;