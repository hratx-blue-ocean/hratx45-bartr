export default (state={latitude: '', longitude: ''}, action) => {
  switch(action.type) {
    case 'GET_LOCATION':
      return action.payload;
    default:
      return state;
  }
}
