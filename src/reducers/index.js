import { LOG_IN, LOG_IN_FAIL } from '../actions/LoginAction'

const initialState = {
  username: null,
  errorMsg: '',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        username: action.payload.username,        
        errorMsg: '',
      }
    case LOG_IN_FAIL:
      return {
        ...state,
        username: null,
        errorMsg: action.payload.errorMsg,
      }
    default:
      return state
    }
};

export default rootReducer;