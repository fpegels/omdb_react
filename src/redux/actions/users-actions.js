import axios from 'axios'
// import { baseURL } from '../../config'


export const setUserName_Temp = function(username_temp){
  return {
      type: 'SET_USERNAME_TEMP',
      username_temp: username_temp
  }
}

  export const submitRegistration = function (newuser) {
    return function (dispatch, getState) {
      axios.post(`http://localhost:3000/users/signup`, newuser)
        .then(newuser => {
            if (newuser.data.success) dispatch(setUserName_Temp(newuser.data.username))
        //   dispatch(setMovie(movie.data)); 
        });
    };
  };

  export const setUser = function(user){
    return {
        type: 'SET_USER',
        user: user
    }
  }

  export const submitLogin = function (user) {
    return function (dispatch, getState) {
      axios.post(`http://localhost:3000/users/login`, user)
        .then(user => {
            if (user.data.success) {
                dispatch(setUser(user.data))
                localStorage.setItem('JWT', JSON.stringify(user.data));
            }
        })
        .catch(err => alert(err));
    };
  };

  export const submitToken = function (authToken) {
    return function (dispatch, getState) {
      axios.get(`http://localhost:3000/users/checkJWTToken`, {headers: {
        'Authorization': 'bearer ' + authToken,
      }})
        .then(response => {
            if (response.data.success) {
                dispatch(setUser({
                    status: response.data.status,
                    success: response.data.success,
                    token: authToken,
                    userid: response.data.user._id
                }))
            }
            else
            {   dispatch(setUser({}))}
        })
        // .catch(err => alert(err));
    };
  };

  export const submitLogout = function () {
    return function (dispatch, getState) {
                localStorage.removeItem('JWT');
                dispatch(setUser())
            }
    };


    export const setAllUsers = function(allusers){
      return {
          type: 'SET_ALLUSERS',
          allusers: allusers
      }
    }
  



    export const fetchAllUsers = function (authToken) {
      return function (dispatch, getState) {
        axios.get(`http://localhost:3000/users`, {headers: {
          'Authorization': 'bearer ' + authToken,
        }})
          .then(response => {
            //  console.log(JSON.stringify(response.data))
            dispatch(setAllUsers(response.data))
          })
          // .catch(err => alert(err));
      };
    };


