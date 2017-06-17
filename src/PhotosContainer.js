import React from 'react';
import Photos from './Photos';
import apiKey from './config.js'

const PhotosContainer = (props) => {
  return (
    <div>
      <Photos photo="cats" api_key={apiKey}/>
      <Photos photo="flowers" api_key={apiKey}/>
      <Photos photo="rainbows" api_key={apiKey}/>
    </div>
  );
}

export default PhotosContainer;
