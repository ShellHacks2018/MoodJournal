
// Setup desired initial state
const initState = {
  auth: false,
  events: [],
  email: '',
  password: ''
  
}

// Create the main reducer function that will be used
// by redux to handle dispathched actions to mutate the 
// central store.
const reducer = (state=initState, action) => {
  // Handle the AUTH_ACTION, dispatched by App > Navbar

  switch(action.type){
    case "AUTH_ACTION":
      return { ...state, auth: action.val }
    case "GET_EMOTION":
      // console.log("Action.val: "+ action.val);
      return { ...state, events: action.val}
    case "GET_EMAIL":
      return { ...state, email: action.val}
    case "GET_PASSWORD":
      return { ...state, password: action.val}
    default:
      return state;
  }


  // if(action.type === 'AUTH_ACTION'){
  //   return { ...state, auth: action.val }
  // }
  // else{
  //   return state;
  // }
}

export default reducer;