export default (state = '', action) => {
  switch (action.type) {
    case 'TESTING_TESTING':
      return action.payload;
    default:
      return state;
  }
};
