/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function FriendListItem(props) {
  return (
    <li
      css={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: 'white',
        width: 350,
        padding: 10,
        boxShadow: '-1px 3px 20px -11px rgba(66, 68, 90, 1);',
        borderRadius: 5,
      }}
    >
      <span
        css={{
          display: 'block',
          width: 20,
          height: 20,
          borderRadius: 50,
          backgroundColor: props.isOnline ? 'green' : 'red',
          marginRight: 10,
        }}
      ></span>
      <img css={{ width: 80, height: 80 }} src={props.avatar} alt="User avatar" width="48" />
      <p css={{ fontSize: 25, fontWeight: 600, paddingLeft: 15 }}>{props.name}</p>
    </li>
  );
}

export default FriendListItem;
