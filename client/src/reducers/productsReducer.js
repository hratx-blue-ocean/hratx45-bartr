export default (state=[], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return action.payload;
    case 'GET_FEED':
      // Placeholder - no functionality yet
      return action.payload;
    default:
      return state;
  }
}







