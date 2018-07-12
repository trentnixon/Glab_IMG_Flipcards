import React from 'react';
import BannerImage from "../MediaTypes/image";
import Video from "../MediaTypes/video";
import Audio from "../MediaTypes/audio";
import ImageSlider from "../MediaTypes/image_Slider";



let DisplayMedia=null;
export default class Card extends React.Component {

  componentWillMount(){}

  render() {
   // console.log(this.props.banner);

    DisplayMedia=null
    if(this.props.banner !== undefined){
    switch(this.props.banner.media) {
        case 'image':
                DisplayMedia = <BannerImage src={this.props.banner.src}  />
            break;
        case 'video':
            DisplayMedia = <Video src={this.props.banner.src}  />
        break;
        case 'audio':
            DisplayMedia = <Audio src={this.props.banner.src}  />
        break;
        case 'slider':
            DisplayMedia = <ImageSlider src={this.props.banner.src}  />
        break;
        
        default:
        DisplayMedia=<div></div>;
    }
    }


    return(
        <div>
            {DisplayMedia}
        </div>
      )
  }
}
