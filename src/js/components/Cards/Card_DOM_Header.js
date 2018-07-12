import React from 'react';

// import PZ from "../Btns/partnerZone";
import CardComponentHeader from "./Card_Component_Header";

export default class Card_Element_Header extends React.Component {

render() {
    return(
        <div className="Side-Banner" >
                <CardComponentHeader banner={this.props.card.banner} />
        </div>
    )
  }
}
