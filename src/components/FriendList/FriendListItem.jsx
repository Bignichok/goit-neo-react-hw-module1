import styles from './FriendListItem.module.css';

const FriendListItem = ({ name, isOnline, avatar }) => {
	return (
		<li className={`${styles.friendItem} ${isOnline ? styles.online : styles.offline}`}>
			<img className={styles.friendAvatar} src={avatar} alt="Avatar" />
			<p className={styles.friendName}>{name}</p>
			<p className={styles.friendStatus}>{isOnline ? 'Online' : 'Offline'}</p>
		</li>
	);
};
export default FriendListItem;
