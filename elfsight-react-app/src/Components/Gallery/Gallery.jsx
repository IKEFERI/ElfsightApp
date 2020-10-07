import React from "react";
import Albums from "./Albums/Albums";
import Photos from "./Photos/Photos";


const Gallery = (props) => {
    return (
        <div>
            <Albums/>
            <Photos/>
        </div>
    )
}
export default Gallery;
