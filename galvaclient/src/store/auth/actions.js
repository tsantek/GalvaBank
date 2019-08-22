import * as ACTION_TYPE from "./type";

export const loggedIn = payload => {
  return {
    type: ACTION_TYPE.AUTH_SUCCESS,
    payload
  };
};
