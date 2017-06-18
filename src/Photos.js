import React from 'react';
import axios from 'axios';

class Photos extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      photos: []
    };
  }

  componentDidMount(){
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.api_key}&tags=${this.props.photo}&per_page=25&format=json&nojsoncallback=1`)
    .then((response) => {
      const photos = response.data.photos.photo.map( photo => {
        return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
      });
  	 this.setState({photos});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    return (
      <div className="photo-container">
        <ul>
          {this.state.photos.map((photo, index) =>
            <li key={index}><img src={photo} alt="{this.props.photo}"/></li>
          )}
        </ul>
      </div>
    )
  }

}

export default Photos;
