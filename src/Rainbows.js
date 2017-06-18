import React from 'react';
import apiKey from './config.js';
import Photos from './Photos'

const Rainbows = (props)=> (
    <Photos photo="rainbows" api_key={apiKey}/>
)

export default Rainbows;
