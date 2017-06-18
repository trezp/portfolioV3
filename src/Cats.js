import React from 'react';
import apiKey from './config.js';
import Photos from './Photos'

const Cats = (props)=> (
    <Photos photo="cats" api_key={apiKey}/>
)

export default Cats;
