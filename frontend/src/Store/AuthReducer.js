const authInitState = {
  auth: false
}

function authReducer (state = authInitState, action) {
  switch (action.type) {
    case 'AUTH_ACTION':
      return { ...state, auth: action.val }
    default:
      return state
  }
}

export default authReducer
