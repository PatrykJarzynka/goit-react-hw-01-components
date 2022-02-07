/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function FriendListItem(props) {
  return (
    <li className="item">
      <span className="status">{props.isOnline}</span>
      <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
      <p className="name">{props.name}</p>
    </li>
  );
}

export default FriendListItem;
