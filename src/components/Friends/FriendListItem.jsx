import PropTypes from "prop-types";

export const FriendListItem = ({ friends }) => {
  return friends.map((friend) => (
    <li className="item" key={friend.id}>
      {friend.isOnline ? (
        <span className="status">online</span>
      ) : (
        <span className="status">offline</span>
      )}
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  ));
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
