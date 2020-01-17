// Sentry error capturing
import * as Sentry from "@sentry/browser";
Sentry.init({
<<<<<<< HEAD
  dsn: 'https://7f28de32de2f4076aa054b2e8aaf4686@sentry.io/1878885'
=======
  dsn: "https://7f28de32de2f4076aa054b2e8aaf4686@sentry.io/1878885"
>>>>>>> c010baa41def27b1c3a0535ca6d2a3a8eaab949a
});

// http://api-server.escxwv87wi.us-west-2.elasticbeanstalk.com/api/testing/test-postgres/products
import paperclips from "../apis/paperclips";

// const singupNewUser()

/* Authenticate Username and Password. Returns a boolean. */
export const authenticateUser = (username, password) => {
  return async (dispatch, getState) => {
<<<<<<< HEAD
    const response = await paperclips.get('/users/authentication', {
=======
    const response = await paperclips.get("/users/authentication", {
>>>>>>> c010baa41def27b1c3a0535ca6d2a3a8eaab949a
      params: {
        username: username,
        password: password
      }
    });
    dispatch({
<<<<<<< HEAD
      type: 'AUTHENTICATE_USER',
=======
      type: "AUTHENTICATE_USER",
>>>>>>> c010baa41def27b1c3a0535ca6d2a3a8eaab949a
      payload: response.data
    });
  };
};

export const fetchUserInformationByUsername = username => {
  return async (dispatch, getState) => {
<<<<<<< HEAD
    const response = await paperclips.get('/users/userInformationUsername', {
=======
    const response = await paperclips.get("/users/userInformationUsername", {
>>>>>>> c010baa41def27b1c3a0535ca6d2a3a8eaab949a
      params: {
        username: username
      }
    });
    dispatch({
<<<<<<< HEAD
      type: 'FETCH_USER_INFORMATION_BY_USERNAME',
=======
      type: "FETCH_USER_INFORMATION_BY_USERNAME",
>>>>>>> c010baa41def27b1c3a0535ca6d2a3a8eaab949a
      payload: response.data
    });
  };
};

export const fetchUserInformationById = userId => {
  return async (dispatch, getState) => {
<<<<<<< HEAD
    const response = await paperclips.get('/users/userInformationId', {
=======
    const response = await paperclips.get("/users/userInformationId", {
>>>>>>> c010baa41def27b1c3a0535ca6d2a3a8eaab949a
      params: {
        id: userId
      }
    });
    dispatch({
<<<<<<< HEAD
      type: 'FETCH_USER_INFORMATION_BY_ID',
=======
      type: "FETCH_USER_INFORMATION_BY_ID",
>>>>>>> c010baa41def27b1c3a0535ca6d2a3a8eaab949a
      payload: response.data
    });
  };
};

// * Ben and Collin Login Action
<<<<<<< HEAD
export const login = userName => {
  return (dispatch, getState) => {
    dispatch({
      type: 'FETCH_USER_ID',
      payload: { userName, userId }
=======
export const login = username => {
  return (dispatch, getState) => {
    dispatch({
      type: "FETCH_USER_ID",
      payload: { username: username, userId: userId }
>>>>>>> c010baa41def27b1c3a0535ca6d2a3a8eaab949a
    });
  };
};
