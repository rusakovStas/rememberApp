export const ACTION_TYPES = {
    USER_LOGGED_IN: "USER_LOGGED_IN",
    USER_ROLES: "USER_ROLES",
    USER_LOGGED_OUT: "USER_LOGGED_OUT"
}

const defaultState = {
    isAuthentifacated: false,
    user: null,
    roles: []
}

export const user = function user(state = defaultState, action = {}) {
    switch (action.type) {
        case ACTION_TYPES.USER_LOGGED_IN:
            return {
                ...state,
                user: action.value,
                isAuthentifacated: true
            };
        case ACTION_TYPES.USER_ROLES:
            return { ...state, roles: action.roles };
        case ACTION_TYPES.USER_LOGGED_OUT:
            return {
                ...state,
                user: null,
                isAuthentifacated: false
            };
        default:
            return state;
    }
}
