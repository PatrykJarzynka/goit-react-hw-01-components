function Profile(props) {
  return (
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
  );
}

export default Profile;
