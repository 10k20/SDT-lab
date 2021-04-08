import { ACTION_SET_AUTH_LOGIN, ACTION_SET_AUTH_STATUS, ACTION_SET_LAST_SCORE } from './Actions'

const initialState = {
    login: '',
    authorized: false,
    lastScore: 0,
  }

export const rootReducer = (state = initialState, action) => {
    console.log(state, action.type)
    switch (action.type) {
        case ACTION_SET_AUTH_LOGIN:
            return { 
                ...state,
                login: action.payload 
            }
        case ACTION_SET_AUTH_STATUS:
            return { 
                ...state,
                authorized: action.payload 
            }
        case ACTION_SET_LAST_SCORE:
            return {
                ...state,
                lastScore: action.payload
            }   
    }
    return state
}
