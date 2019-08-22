import * as ACTION_TYPES from "./type";

export const initialStateAuth = {
  isAuth: false,
  user: {},
  err: {}
};

export default (state = initialStateAuth, action) => {
  switch (ACTION_TYPES) {
    case ACTION_TYPES.AUTH_PENDING:
      return state;

    case ACTION_TYPES.AUTH_SUCCESS:
      return {
        ...state,
        user: { email: "test@test.com", password: "password" }
      };
    case ACTION_TYPES.AUTH_ERROR:
      return {
        ...state,
        isAuth: false,
        err: action.payload
      };
    default:
      return state;
  }
};
