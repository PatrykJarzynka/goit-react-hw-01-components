/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';

function Profile(props) {
  return (
    <div>
      <Global
        styles={{
          '.avatar': {
            width: 100,
            borderRadius: 50,
            marginTop: 30,
          },
          '.name': {
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 8,
          },
          '.tag': {
            color: 'rgb(145, 146, 156)',
            fontSize: 14,
            marginTop: 0,
            marginBottom: 8,
          },
          '.location': {
            fontSize: 15,
            color: 'rgb(145, 146, 156)',
            marginTop: 0,
          },
          '.stats': {
            display: 'flex',
            paddingLeft: 0,
            border: 0,
            borderTop: 1,
            borderStyle: 'solid',
            borderColor: 'rgb(227, 227, 227)',
            width: '100%',
            margin: 0,
             backgroundColor: 'rgb(247, 246, 242)',
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
          },
          ul: {
            listStyle: 'none',
          },
          '.profile': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '-1px 3px 20px -11px rgba(66, 68, 90, 1);',
            width: 300,
            borderRadius: 5,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'white'
          },
          '.label': {
            fontSize: 13,
          },
          '.quantity': {
            fontSize: 16,
            fontWeight: 700,
          },
        }}
      />
      <div className="profile">
        <div className="description">
          <img src={props.avatar} alt="User avatar" className="avatar" />
          <p className="name">{props.username}</p>
          <p className="tag">{props.tag}</p>
          <p className="location">{props.location}</p>
        </div>

        <ul className="stats">
          <li
            css={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              paddingTop: 15,
              paddingBottom: 15,
            }}
            key={'follow'}
          >
            <span className="label">Followers</span>
            <span className="quantity">{props.stats.followers}</span>
          </li>
          <li
            key={'view'}
            css={{
              border: 0,
              borderRight: 1,
              borderLeft: 1,
              borderStyle: 'solid',
              borderColor: 'rgb(227, 227, 227)',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              paddingTop: 15,
              paddingBottom: 15,
            }}
          >
            <span className="label">Views</span>
            <span className="quantity">{props.stats.views}</span>
          </li>
          <li
            css={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              paddingTop: 15,
              paddingBottom: 15,
            }}
            key={'like'}
          >
            <span className="label">Likes</span>
            <span className="quantity">{props.stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
