export default (state={latitude: 30.264980, longitude: -97.746600}, action) => {
  switch(action.type) {
    case 'GET_LOCATION':
      return action.payload;
    default:
      return state;
  }
}
