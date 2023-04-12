import css from './FriendList.module.css';

import { PropTypes } from 'prop-types';

export default function FriendList(props) {
  const { friends } = props;

  return <ul class="friend-list"></ul>;
}

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }).isRequired,
// };
