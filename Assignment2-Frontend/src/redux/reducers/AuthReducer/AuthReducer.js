/* eslint-disable no-param-reassign */
import * as authActions from "../../actions/AuthAction/AuthActions";

const initialState = {
  user: {},
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case authActions.STORE_USER:
      return {
        ...state,
        user: action.userData,
      };

    default: {
      return state;
    }
  }
}
