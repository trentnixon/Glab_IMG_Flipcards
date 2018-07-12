import React from 'react';
import IconButton from '@material-ui/core/IconButton';

export default class Card extends React.Component {

  render() {
    return(
        <IconButton aria-label="Flip"  className="Button_Action_FlipMe" onClick={this.props.onChange.bind(this)} >
            <i className="material-icons"> {this.props.FlipIcon} </i>
        </IconButton>
      ) 
  }
}
