import * as userData from './userData.json'

export const fetchUserData = () => {
	return new Promise((resolve) => {
		setTimeout(resolve(userData), 1)
	})
}