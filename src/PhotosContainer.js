import React from 'react';
import Photos from './Photos';

const PhotosContainer = (props) => {
  return (
    <div>
      <Photos photo="cats"/>
      <Photos photo="flowers"/>
      <Photos photo="rainbows"/>
    </div>
  );
}

export default PhotosContainer;
