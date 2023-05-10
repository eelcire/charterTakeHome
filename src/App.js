import React, { useEffect, useState } from 'react';
import { fetchUserData } from './server';
import { calculatePoints } from './utils';

const App = () => {
	const [userData, setUserData] = useState({})

	useEffect(() => {
		return async () => {
			await fetchUserData().then(res => setUserData(res.data))
		}
	})

	const renderUserData = (data) => {
		return data.map(user => {
			return (
				<tr>
					<td>{user.name}</td>
					<td>{user.totalSpent}</td>
					<td>{calculatePoints(user.totalSpent)}</td>
				</tr>
			)
		})
	}

	return (
		<div className="App">
			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>Total Spent</td>
						<td>Points</td>
					</tr>
				</thead>
				<tbody>
					{renderUserData(userData)}
				</tbody>
			</table>
		</div>
	);
}

export default App;
