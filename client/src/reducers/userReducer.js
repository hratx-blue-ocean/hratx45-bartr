<<<<<<< HEAD
export default (
  state = { userName: '', userId: -1, userItems: [] },
  action
) => {
  switch (action.type) {
    case 'FETCH_USER_ID':
      return { ...state, ...action.payload };
=======
export default (state = "", action) => {
  switch (action.type) {
    case "FETCH_USER_ID":
      return action.payload;
    case "FETCH_USER_INFORMATION_BY_ID":
      return action.payload;
>>>>>>> c010baa41def27b1c3a0535ca6d2a3a8eaab949a
    default:
      return state;
  }
};
