import s from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className="label">Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
