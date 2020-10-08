import React, {useCallback, useEffect} from "react";
import AlbumsItem from "./AlbumsItem";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getUserAlbums, selectAlbum} from "../../../redux/AlbumsReducer";
import Slider from "../Slider/Slider";


const StyledAlbums = styled.div`
  margin-bottom: 32px;
  padding: 20px 20px 60px;
  background-color: #fffeb4;
  max-width: 100%;
`
const Albums = () => {
    const dispatch = useDispatch();
    const getAlbumsThunk = useCallback((id) => dispatch(getUserAlbums(id)), [dispatch]);
    const selectAlbumThunk = useCallback((id) => dispatch(selectAlbum(id)), [dispatch]);
    const albums = useSelector(state => state.albumsState.albums);
    const selUser = useSelector(state => state.usersState.selUser);


    useEffect(() => {
        getAlbumsThunk(selUser);
    }, [getAlbumsThunk, selUser]);
    useEffect(() => {
        if (albums.length) {
            selectAlbumThunk(albums[0].id);
        }
    }, [selectAlbumThunk, albums]);



    return (
        <StyledAlbums>
            <h2>Choose Album</h2>
            <Slider>{ albums.length ? albums.map(i => <AlbumsItem key={i.id} {...i} />) : "LOADING..."}</Slider>
        </StyledAlbums>
    )
}
export default Albums;