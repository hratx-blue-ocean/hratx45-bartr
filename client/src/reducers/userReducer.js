export default (state = "", action) => {
  switch (action.type) {
    case "FETCH_USER_ID":
      return action.payload;
    case "FETCH_USER_INFORMATION_BY_ID":
      return action.payload;
    default:
      return state;
  }
};
