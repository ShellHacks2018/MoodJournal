
// Setup desired initial state
const initState = {
  auth: false
}

// Create the main reducer function that will be used
// by redux to handle dispathched actions to mutate the 
// central store.
const reducer = (state=initState, action) => {
  // Handle the AUTH_ACTION, dispatched by App > Navbar
  if(action.type === 'AUTH_ACTION'){
    return { ...state, auth: action.val }
  }
  else{
    return state;
  }
}

export default reducer;