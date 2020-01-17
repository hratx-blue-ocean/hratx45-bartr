export default (
  state = { userName: '', userId: -1, userItems: [] },
  action
) => {
  switch (action.type) {
    case 'FETCH_USER_ID':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
