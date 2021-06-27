import axios from "axios";
import {ACTION_TYPES} from "../user";

export const setUserLoggedIn = value => (
    {
        type: ACTION_TYPES.USER_LOGGED_IN,
        value
    }
);

export const setUserLoggedOut = () => (
    {
        type: ACTION_TYPES.USER_LOGGED_OUT
    }
);


export const loadUser = () => async (dispatch, getState) => {
    let user = null;
    try{
        user = await axios.get("/api/user");
        dispatch(setUserLoggedIn(user));
    }catch (e){
        dispatch(setUserLoggedOut());
    }
}

export const logout = () => async (dispatch, getState) => {
    axios.post("/logout").then(rs => {
       dispatch(setUserLoggedOut());
    });
}
