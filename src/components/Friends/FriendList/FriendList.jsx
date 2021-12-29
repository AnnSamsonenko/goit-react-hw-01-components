import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import { Friends } from "../FriendsStyled";
export const FriendList = ({ friends }) => {
  return (
    <Friends>
      <FriendListItem friends={friends} />
    </Friends>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.array.isRequired,
};
