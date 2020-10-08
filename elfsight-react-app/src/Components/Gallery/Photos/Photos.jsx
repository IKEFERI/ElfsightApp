import React, {useCallback, useEffect} from "react";
import PhotoThumbnails from "./PhotoThumbnails/PhotoThumbnails";
import PhotoView from "./PhotoView/PhotoView";
import {useDispatch, useSelector} from "react-redux";
import {getAlbumPhotos, selectPhoto} from "../../../redux/PhotosReducer";
import styled from "styled-components";

const StyledPhotos = styled.div`
  min-height: 100vh;
  padding: 20px ;  
  background-color: #fffeb4; 
`

const Photos = () => {
    const dispatch = useDispatch();
    const getPhotosThunk = useCallback((id) => dispatch(getAlbumPhotos(id)), [dispatch]);
    const selectPhotoThunk = useCallback((id) => dispatch(selectPhoto(id)), [dispatch]);
    const photos = useSelector(state => state.photosState.photos);
    const selAlbum = useSelector(state => state.albumsState.selAlbum);
    const selPhoto = useSelector(state => state.photosState.selPhoto);
    useEffect(() => {
        if (photos.length) selectPhotoThunk(photos[0].id);
    }, [selectPhotoThunk, photos]);
    useEffect(() => {
        getPhotosThunk(selAlbum);
    }, [getPhotosThunk, selAlbum]);
    return (
        <StyledPhotos>
            <h2>See Gallery</h2>
            <PhotoView photo={photos.find(arr => arr.id === selPhoto)}/>
            <PhotoThumbnails photos={photos}/>
        </StyledPhotos>
    )
}

export default Photos;