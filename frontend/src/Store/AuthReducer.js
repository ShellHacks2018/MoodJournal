const authInitState = {
  auth: false
}

function authReducer (state = authInitState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, auth: true }
    case 'LOGOUT':
      return { ...state, auth: false }
    default:
      return state
  }
}

export default authReducer
