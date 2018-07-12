import React from 'react';
import FlipButton from "../Btns/FlipButton";

export default class Card extends React.Component {

  render() {
    return(
        <div className="ActionBar row" >
            <div className="col-12" id="action_flip">
                <FlipButton {... this.props}/>
            </div>
        </div>
    )
  }
}
