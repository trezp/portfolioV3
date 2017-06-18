import React from 'react';
import apiKey from './config.js';
import Photos from './Photos';

const Flowers = (props)=> (
    <Photos photo="flowers" api_key={apiKey}/>
)


export default Flowers;
