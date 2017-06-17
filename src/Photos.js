import React from 'react';
import axios from 'axios';

class Photos extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.api_key)
    this.state = {
      photos: []
    };
  }

  componentDidMount(){
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.api_key}&tags=${this.props.photo}&per_page=25&format=json&nojsoncallback=1`)
    .then((response) => {
      console.log(response)
      const photos = response.data.photos.photo.map( photo => {
        return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
      });
      console.log(photos)
      // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    //  console.log(photos)
  	 this.setState({photos});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    return (
      <div>
        <ul>
          {this.state.photos.map((photo, i) =>
            <li><img key="{i}" src={photo}/></li>
          )}
        </ul>
      </div>
    )
  }

}

export default Photos;
