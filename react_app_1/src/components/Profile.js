/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

function Profile(props) {
  return (
    <div>
      <Global
        styles={{
          '.avatar': {
            width: 100,
            borderRadius: 50,
          },
          '.name': {
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 8,
          },
          '.tag': {
            color: 'rgb(145, 146, 156)',
            fontSize: 15,
            marginTop: 0,
            marginBottom: 8,
          },
          '.location': {
            fontSize: 16,
            color: 'rgb(145, 146, 156)',
            marginTop: 0,
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
          <li key={'follow'}>
            <span className="label">Followers</span>
            <span className="quantity">{props.stats.followers}</span>
          </li>
          <li key={'view'}>
            <span className="label">Views</span>
            <span className="quantity">{props.stats.views}</span>
          </li>
          <li key={'like'}>
            <span className="label">Likes</span>
            <span className="quantity">{props.stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
