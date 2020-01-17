export default (
	state = { userName: '', userId: -1, userItems: [] },
	action
) => {
	switch (action.type) {
		case 'FETCH_USER_INFORMATION_BY_USERNAME':
			return action.payload;
		case 'FETCH_USER_INFORMATION_BY_ID':
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
