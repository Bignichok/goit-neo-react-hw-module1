import Profile from '@/components/Profile';
import FriendList from '@/components/FriendList';
import TransactionHistory from '@/components/TransactionHistory';

import userData from '@/data/userData.json';
import friends from '@/data/friends.json';
import transactions from '@/data/transactions.json';

const App = () => {
	return (
		<>
			<Profile {...userData} />
			<FriendList friends={friends} />
			<TransactionHistory transactions={transactions} />
		</>
	);
};

export default App;
