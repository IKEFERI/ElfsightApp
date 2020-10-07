import React, {useEffect, useRef} from "react";
import styled from "styled-components";

const StyledSliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  position:relative;
`
const StyledSlider = styled.div`
  display: flex; 
  flex-wrap: nowrap;
  touch-action: none;
  cursor: grab;
  height: 100%;
  width: fit-content;
  position:relative;
  &:active{
    cursor: grabbing;
  }
`

const Slider = (props) => {
    const slider = useRef(null);
    useEffect(() => {
        const SC = slider.current;
        SC.style.transform = 'translateX(0)'
        SC.onpointerdown = (event) => {
            let prevPosSlider = parseInt(SC.style.transform.match(/-*\d+/g));
            let prevPosCursor = event.pageX;
            let movePosCursor, lengthWay, posSlides, widthSlider, endPosSlider;

            SC.onpointermove = (event) => {
                movePosCursor = event.pageX;
                lengthWay = prevPosCursor - movePosCursor;
                posSlides = prevPosSlider - lengthWay;
                SC.style.transform = `translateX(${posSlides}px)`;
                widthSlider = SC.offsetWidth;
                endPosSlider = widthSlider - SC.offsetParent.clientWidth;
            }

            SC.onpointerup = () => {
                let smoothWay = +(prevPosCursor - movePosCursor) * 3;
                let smooth = 450;
                let smoothPosSlide = posSlides - smoothWay;
                if (posSlides - smoothWay > 0) {
                    smoothPosSlide = 0;
                }
                if (-posSlides + smoothWay > endPosSlider) {
                    smoothPosSlide = -endPosSlider;
                }
                SC.style.transform = `translateX(${smoothPosSlide}px)`;
                SC.style.transition = `all ease-out ${smooth}ms`;
                setTimeout(() => {
                    SC.style.transition = ``;
                }, smooth);
                SC.onpointermove = null;
                SC.onpointerup = null;
            }
            SC.ondragstart = () => false;
        }
    }, []);

    return (
        <StyledSliderWrapper>
            <StyledSlider ref={slider}>
                {props.children}
            </StyledSlider>
        </StyledSliderWrapper>
    )
}

export default Slider;