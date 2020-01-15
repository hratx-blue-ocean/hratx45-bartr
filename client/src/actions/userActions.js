// Sentry error capturing
import * as Sentry from "@sentry/browser";
Sentry.init({
	dsn: "https://7f28de32de2f4076aa054b2e8aaf4686@sentry.io/1878885"
});

// http://api-server.escxwv87wi.us-west-2.elasticbeanstalk.com/api/testing/test-postgres/products
import paperclips from "../apis/paperclips";

// const singupNewUser()

/* Authenticate Username and Password. Returns a boolean. */
<<<<<<< HEAD
// export const authenticateUser = (username, password) => {
//   return async (dispatch, getState) => {
//     const response = await paperclips.get("/users/authentication", {
//       params: {
//         username: username,
//         password: password
//       }
//     });
//     dispatch({
//       type: "AUTHENTICATE_USER",
//       payload: response.data
//     });
//   };
// };
=======
export const authenticateUser = (username, password) => {
	return async (dispatch, getState) => {
		const response = await paperclips.get("/users/authentication", {
			params: {
				username: username,
				password: password
			}
		});
		dispatch({
			type: "AUTHENTICATE_USER",
			payload: response.data
		});
	};
};
>>>>>>> 6ae7925d8e125622e37ef25d45f99f6b42c2fccb

export const fetchUserInformationByUsername = username => {
	return async (dispatch, getState) => {
		const response = await paperclips.get(
			"/users/userInformationUsername",
			{
				params: {
					username: username
				}
			}
		);
		dispatch({
			type: "FETCH_USER_INFORMATION_BY_USERNAME",
			payload: response.data
		});
	};
};

export const fetchUserInformationById = userId => {
	return async (dispatch, getState) => {
		const response = await paperclips.get("/users/userInformationId", {
			params: {
				id: userId
			}
		});
		dispatch({
			type: "FETCH_USER_INFORMATION_BY_ID",
			payload: response.data
		});
	};
};

// * Ben and Collin Login Action
export const login = username => {
	return (dispatch, getState) => {
		dispatch({
			type: "TESTING_TESTING",
			payload: username
		});
	};
};
