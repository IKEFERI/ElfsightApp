import {galleryAPI} from "../API/api";

const SET_ALBUMS = "SET_ALBUMS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SELECT_ALBUM = "SELECT_ALBUM";

let initState = {
    albums: [],
    selAlbum: 1,
    isFetching: false,
    err: null
}
const AlbumsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_ALBUMS:
            return {
                ...state,
                albums: action.albums
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.val
            }
        case SELECT_ALBUM:
            return {
                ...state,
                selAlbum: action.val
            }

        default:
            return state;
    }
}

const setAlbums = (val) => ({type: SET_ALBUMS, albums: val});
const setIsFetchingAlbums = (val) => ({type: SET_IS_FETCHING, val});

export const getUserAlbums = (id) => (dispatch) => {
    dispatch(setIsFetchingAlbums(true));
    return galleryAPI.getUserAlbums(id).then(data => {
        dispatch(setAlbums(data));
        dispatch(setIsFetchingAlbums(false));
    });
};

export const getCoverAlbum = (id) => () => {
        return galleryAPI.getCoverAlbum(id);
};

export const selectAlbum = (val) => ({type: SELECT_ALBUM, val});

export default AlbumsReducer;