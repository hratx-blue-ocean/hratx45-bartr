export default (state=[], action) => {
  switch (action.type) {
    case 'GET_HOME_FEED':
      return action.payload;
    case 'GET_FEED':
      // Placeholder - no functionality yet
      return action.payload;
    default:
      return state;
  }
}







