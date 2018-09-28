import { TOGGLEAUTHPOPUP } from '../actions';

const initialState = {
  authPopup: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLEAUTHPOPUP:
      return {
        authPopup: !state.authPopup
      };

    default:
      return state;
  }
};
