const LandingInitState = {
    email: '',
    password: ''
  }
  
  function landingPageReducer (state = LandingInitState, action) {
    switch (action.type) {
      case 'GET_EMAIL':
        return { ...state, email: action.val }
      case 'GET_PASSWORD':
        return { ...state, password: action.val }
      default:
        return state
    }
  }
  
  export default landingPageReducer