import {galleryAPI} from "../API/api";

const SET_USERS = "SET_USERS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SELECT_USER = "SELECT_USER";

let initState = {
    users: [],
    selUser: 1,
    isFetching: false,
    err: null
}
const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.val
            }
        case SELECT_USER:
            return {
                ...state,
                selUser: action.val
            }
        default:
            return state;
    }
}

const setUsers = (val) => ({type: SET_USERS, users: val});
const setIsFetching = (val) => ({type: SET_IS_FETCHING, val});

export const getUsers = () => (dispatch) => {
    dispatch(setIsFetching(true));
    galleryAPI.getUsers().then(data => {
        dispatch(setUsers(data));
        dispatch(setIsFetching(false));
    });
};

export const selectUser = (val) => ({type: SELECT_USER, val});

export default UsersReducer;