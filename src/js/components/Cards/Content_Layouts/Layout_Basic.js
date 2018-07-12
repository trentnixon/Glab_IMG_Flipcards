import React from 'react';
import CardParagraph from "./Card_Paragraph";

export default class Card extends React.Component {

  componentWillMount(){ }

  render() {
    return(
       <div>
            <h2>{this.props.content.header}</h2>
            <h3>{this.props.content.subheader}</h3>
            <CardParagraph p={this.props.content.copy}/>
        </div>
    )
  }
}
