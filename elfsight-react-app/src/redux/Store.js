import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import UsersReducer from "./UsersReducer";
import AlbumsReducer from "./AlbumsReducer";
import PhotosReducer from "./PhotosReducer";

let reducers = combineReducers({
    usersState: UsersReducer,
    albumsState: AlbumsReducer,
    photosState: PhotosReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;
export default store;