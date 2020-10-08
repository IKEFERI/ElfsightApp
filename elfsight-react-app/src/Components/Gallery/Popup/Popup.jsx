import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {openPopup, selectPhoto} from "../../../redux/PhotosReducer";


const StyledOverlay = styled.div`
  display: ${props => props.isOpenPopup ? "block" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: rgba(0,0,0,0.4);
`
const StyledPopup = styled.div`

  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #fff;
  cursor: auto;
  padding: 20px;
  width: 80vw;
  max-width: 800px;
  img{
  display: block;
  margin: auto; 
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
  .leftArr,.rightArr{
    display: block;
    padding: 10px 15px;
    position:absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #ffcc77;
    font-size: 30px;
    line-height: 1.25;
    cursor: pointer;
  }
  .leftArr{
    left: 0;
  }
  .rightArr{
    right: 0;
  }
  .title{
    display: block;
    margin-top: 15px;
  }
  .disable{
    opacity: 0.4;
  }
  @media screen and (max-width: 768px){
    width: 100%;
    padding: 0 0 20px;
    .leftArr,.rightArr{
    padding: 10px 10px;
    font-size: 24px;
    }
  }
`
const Close = styled.button`
  display: block;
  position: absolute;
  top: 5px;
  right: 5px; 
  line-height: 0.7;
  font-size: 24px;
  padding: 10px;
  background: rgba(250,235,215,0.7);
  opacity: 0.5;
  border: none;
  outline: none;
`
const Popup = () => {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photosState.photos);
    const selPhoto = useSelector(state => state.photosState.selPhoto);
    const isOpenPopup = useSelector(state => state.photosState.openPopup);
    let photo = photos.find(arr => arr.id === selPhoto);
    const overlay = useRef(null);
    const closePopup = (event) => {
        return event.target === overlay.current ? dispatch(openPopup(false)) : null;
    }

    return (
        <StyledOverlay ref={overlay} isOpenPopup={isOpenPopup} onClick={closePopup}>
            <StyledPopup>
                {photo ? <>
                    <img src={photo.url} alt="gallery"/>

                    {selPhoto === 1 ?
                        <span className={"leftArr disable"}>&#8656;</span> :
                        <span onClick={() => dispatch(selectPhoto(selPhoto - 1))}
                              className={"leftArr"}>&#8656;</span>}
                    {selPhoto === photos.length ?
                        <span className={"rightArr disable"}>&#8658;</span> :
                        <span onClick={() => dispatch(selectPhoto(selPhoto + 1))}
                              className={"rightArr"}>&#8658;</span>}

                    <span className={"title"}>{selPhoto} : {photo.title}</span>
                </> : 'LOADING...'}
            </StyledPopup>
            <Close onClick={() => dispatch(openPopup(false))}>X</Close>
        </StyledOverlay>
    )
}
export default Popup;
