import React, {useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getCoverAlbum, selectAlbum} from "../../../redux/AlbumsReducer";
import loading from '../../../assets/200.gif';
const StyledAlbumsItem = styled.div`
  display: flex;
  flex: 0 1 10%;
  min-width: 250px; 
  height: 250px;
  align-items: flex-end;
  justify-content: center; 
  padding: 20px; 
  background-color: #fff49e;
  background-image: url("${props => props.bg}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: solid 2px #ffe96f;
  border-top: none;
  cursor: pointer;
  transition: all ease 0.25s;
  opacity: 0.6;
  &:hover{
    background-color: #d7d7d7;
    opacity: 1;
    transform: translateY(-5%);
  }
  &:focus, &:active, &.active{ 
    background-color: #92ff8f;
    transform: translateY(-5%);
    opacity: 1;
  }
    
  & > div:first-of-type{
    font-weight: 700;
    font-size: 1.1rem;
  }
`


const AlbumsItem = (props) => {
    const [cover, setCover] = useState();
    const dispatch = useDispatch();
    const selAlbum = useSelector(state => state.albumsState.selAlbum);
    const getCover = useCallback((id) => dispatch(getCoverAlbum(id)), [dispatch]);
    useEffect(() => {
        getCover(props.id).then(data => setCover(data));
    }, [getCover,props.id]);
    return (
        <StyledAlbumsItem bg={cover ? cover.thumbnailUrl : loading}
                          className={selAlbum === props.id ? 'active' : null}
                          onClick={() => dispatch(selectAlbum(props.id))}>
            <div>{props.title}</div>
        </StyledAlbumsItem>
    );
}
export default AlbumsItem;