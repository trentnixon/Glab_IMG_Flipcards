import React from 'react';

import ActionBar from "./Card_Component_ActionBar"; 

import CTA from "../Btns/cta";

export default class Card_Dom_ActionBar extends React.Component {
render() {
    return(
        <div className="Card_Bottom">
            <CTA cta={this.props.card.CTA}/>
            <ActionBar {... this.props}/>
        </div>
    )
  }
}
