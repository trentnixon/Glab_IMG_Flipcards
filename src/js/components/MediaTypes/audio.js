import React from 'react';

export default class Image extends React.Component {

  componentWillMount(){}

  render() {
    return(
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title="audio" src={this.props.src} ></iframe>
            </div>
        )
    
  }
}
 

