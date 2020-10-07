import {galleryAPI} from "../API/api";

const SET_PHOTOS = "SET_PHOTOS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SELECT_PHOTO = "SELECT_PHOTO";
const OPEN_POPUP = "OPEN_POPUP";

let initState = {
    photos: [],
    selPhoto: 1,
    isFetching: false,
    openPopup: false,
    err: null
}
const PhotosReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            return {
                ...state,
                photos: action.photos
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.val
            }
        case OPEN_POPUP:
            return {
                ...state,
                openPopup: action.val
            }
        case SELECT_PHOTO:
            return {
                ...state,
                selPhoto: action.val
            }
        default:
            return state;
    }
}

const setPhotos = (val) => ({type: SET_PHOTOS, photos: val});
const setIsFetchingPhotos = (val) => ({type: SET_IS_FETCHING, val});

export const getAlbumPhotos = (id) => (dispatch) => {
    dispatch(setIsFetchingPhotos(true));
    galleryAPI.getAlbumPhotos(id).then(data => {
        dispatch(setPhotos(data));
        dispatch(setIsFetchingPhotos(false));
    });
};

export const selectPhoto = (val) => ({type: SELECT_PHOTO, val});
export const openPopup = (val) => ({type: OPEN_POPUP, val});
export default PhotosReducer;