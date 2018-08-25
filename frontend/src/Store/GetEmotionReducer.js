const calendarInitState = {
  events: []
}

function getEmotionReducer (state = calendarInitState, action) {
  switch (action.type) {
    case 'GET_EMOTION':
      console.log('Action.val: ' + action.val)
      return { ...state, events: action.val }
    default:
      return state
  }
}

export default getEmotionReducer
