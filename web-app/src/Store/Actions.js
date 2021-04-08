export const ACTION_SET_AUTH_LOGIN = 'ACTION_SET_AUTH_LOGIN'
export const ACTION_SET_AUTH_STATUS = 'ACTION_SET_AUTH_STATUS'
export const ACTION_SET_LAST_SCORE = 'ACTION_SET_LAST_SCORE'

export const setAuthLogin = newLogin => ({
    type: ACTION_SET_AUTH_LOGIN,
    payload: newLogin
})

export const setAuthStatus = newAuthStatus => ({
    type: ACTION_SET_AUTH_STATUS,
    payload: newAuthStatus
})

export const setLastScore = newLastScore => ({
    type: ACTION_SET_LAST_SCORE,
    payload: newLastScore
})