import userDb from '../dummy_data/users';

export default (state = { ...userDb[2] }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...userDb[action.id] };
    default:
      return state;
  }
};
