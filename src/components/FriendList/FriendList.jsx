import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
	return (
		<ul className={styles.friendList}>
			{friends.map(friend => (
				<FriendListItem key={friend.id} {...friend} />
			))}
		</ul>
	);
};

export default FriendList;
