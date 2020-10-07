import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {openPopup} from "../../../../redux/PhotosReducer";
import loading from '../../../../assets/200.gif';

const StyledPhotoView = styled.div`
  display: inline-block;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  max-width: 1200px;
  min-width: 280px;
  height: 600px;
  max-height: 80vh;
  margin: 40px auto;
  cursor: pointer;
  position: relative;
  span{
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 12px;
    font-size: 24px;
    background-color: rgba(0,0,0, 0.6);
    opacity: 0.4;
    transition: all ease 0.25s;
  }
  &:hover span{
    opacity: 1;
  }
`


const Photo = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`

const PhotoView = (props) => {
    const dispatch = useDispatch();

    return (
        <StyledPhotoView bg={loading} onClick={() => dispatch(openPopup(true))}>
            {props.photo ? <Photo src={props.photo.url}/> : 'LOADING...'}
            <span role="img" aria-label="zoom">&#128269;</span>
        </StyledPhotoView>
    );
}
export default PhotoView;


// 1. Организовать попап, перелистывание в попапе, увеличение(на зажатую кнопку мыши), перелистывание по краям картинки, свайпами
// 2. Обложки для альбомов
// 3. Мелочевка для красоты и удобстваб нужно показать что слайдеры можно слайдить, футер добавить