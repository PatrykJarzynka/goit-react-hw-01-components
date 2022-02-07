/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FriendListItem from './FriendListItem';

function FriendList(props) {
  const friends = props.friends;
  const view = friends.map(friend => (
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));

  return <ul css={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0}}>{view}</ul>;
}

export default FriendList;
