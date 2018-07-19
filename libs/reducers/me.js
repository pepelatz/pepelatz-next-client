import { LOGIN, LOGOUT } from '../actions';

const initialState = {
  login: '',
  id: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        login: action.me.login,
        id: action.me.id
      };

    case LOGOUT:
      return {
        login: '',
        id: ''
      };

    default:
      return state;
  }
};
