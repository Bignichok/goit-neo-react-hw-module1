import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
	return (
		<table className={styles.transactionTable}>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>
			<tbody>
				{transactions.map(({ id, type, amount, currency }) => (
					<tr key={id}>
						<td className={styles.transactionType}>{type}</td>
						<td className={styles.transactionAmount}>{amount}</td>
						<td className={styles.transactionCurrency}>{currency}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TransactionHistory;
