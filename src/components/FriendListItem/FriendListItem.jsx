import css from './FriendListItem.module.css';

import { PropTypes } from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

{
  /*  */
}
