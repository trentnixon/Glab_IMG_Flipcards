import React from 'react';

export default class Image extends React.Component {

  componentWillMount(){}

  render() {
    return(<img src={this.props.src} alt="" className="BannerImage" />)
  }
}
