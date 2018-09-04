const EmotionInitState = {
  currentEmotion: 'Choose a Mood',
  redirect: false
}

function emotionReducer (state = EmotionInitState, action) {
  switch (action.type) {
    case 'UPDATE_EMOTION':
      return { ...state, currentEmotion: action.val }
    case 'UPDATE_REDIRECT':
      return { ...state, redirect: action.val }
    default:
      return state
  }
}

export default emotionReducer
