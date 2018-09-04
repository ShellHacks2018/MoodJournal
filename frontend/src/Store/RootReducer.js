import { combineReducers } from 'redux'
import authReducer from './AuthReducer'
import getEmotionReducer from './GetEmotionReducer'
import landingPageReducer from './LandingPageReducer'
import emotionReducer from './EmotionReducer'

// We could have each reducer inside a file that holds all the reducers and we
// import them look at the example they have. But for simplicity lets define
// them here inside this file

// ES6 property shorthand
// combineReducers({counter, todos}) === combineReducers({counter: counter, todos:todos})
const reducer = combineReducers(
  {
    authReducer,
    getEmo: getEmotionReducer,
    lpr: landingPageReducer,
    emoReducer: emotionReducer
  }
)
export default reducer

/*
- https://redux.js.org/api/combinereducers
As the app increases in complexity, you'll want to split your reducing
functions into seprarate functions, each managing independent parts of the
state.
*/
