import $ from 'jquery'; 

const AuthAction = (dispatch) => {
  return {
    login: (data) => { 
      let url = "http://localhost:3001/api/Users/login";

      $.post(url, data).done( (response) => {
        localStorage.setItem("token", response.id);
        localStorage.setItem("user", data.username);
        localStorage.setItem("userId", response.userId);
        dispatch({type: 'LOGIN'}); 
        });
    },
    logoff: () => {
      localStorage.clear();
      dispatch({type: 'LOGOUT'}); 
    }
  }
}

export default AuthAction;