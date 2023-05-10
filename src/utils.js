const addDoublePoints = (num) => {
	return num > 100 ? (num - 100) * 2 : 0
}

const addSinglePoints = (num) => {
	return num > 100 ? 50 : (num > 50 ? num - 50 : 0)
}

export const calculatePoints = (totalSpent) => {
	return addDoublePoints(totalSpent) + addSinglePoints(totalSpent)
}