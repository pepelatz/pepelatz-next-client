// me
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const logIn = me => ({
  type: LOGIN,
  me
});
export const logOut = () => ({
  type: LOGOUT
});
