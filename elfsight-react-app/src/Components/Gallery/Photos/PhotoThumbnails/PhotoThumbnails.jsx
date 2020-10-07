import React from "react";
import PhotoThumbnailsItem from "./PhotoThumbnailsItem";
import styled from "styled-components";
import Slider from "../../Slider/Slider";


const StyledPhotoThumbnails = styled.div`
  width: 100%;
  height: 150px;
`


const PhotoThumbnails = (props) => {
    return (
        <StyledPhotoThumbnails>
            <Slider>
                {props.photos ?
                    props.photos.map(i => <PhotoThumbnailsItem key={i.id} img={i.thumbnailUrl} id={i.id}/>) : "LOADING..."}
            </Slider>

        </StyledPhotoThumbnails>
    );
}

export default PhotoThumbnails;
