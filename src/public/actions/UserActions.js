import axios from 'axios';
import { 
  FETCH_LOGIN_STATUS,
  ERROR_FETCHING_USER
} from './types';

export function fetchLoginStatus() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/retrieveUserData');
      const loggedIn = data !== 'not logged in';
      const admin = data[0].type === 'admin';
      const status = { isLoggedIn: false, isAdmin: false, userEmail: null };

      if (loggedIn) {
        if (admin) status.isAdmin = true;
        status.isLoggedIn = true;
        status.userEmail = data[0].email;
      }

      dispatch({ type: FETCH_LOGIN_STATUS, payload: status });
    } catch (err) {
      dispatch({ type: ERROR_FETCHING_USER, payload: err });
    }

  }
}



// const getUserData = async () => {
//   try {
//     const { data } = await axios.get('/retrieveUserData');
//     const loggedIn = data !== 'not logged in';
//     const admin = data[0].type === 'admin';
//     let status = { isLoggedIn: false, isAdmin: false, userEmail: null };
//     if (loggedIn && admin) {
//       status.isAdmin = true;
//     }

//     if (loggedIn) {
//       status.isLoggedIn = true;
//       status.userEmail = data[0].email;
//     }

//     return status;
//   } catch (err) {
//     // todo: better error handling in client
//     console.error(err.message);
//   }
// };