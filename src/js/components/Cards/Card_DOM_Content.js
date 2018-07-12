import React from 'react';

import BasicLayout from "./Content_Layouts/Layout_Basic";
import QuestionLayout from "./Content_Layouts/Layout_Question";

// This component can be used to add new Layout types
let DisplayContent;
export default class Card_Dom_Content extends React.Component {
render() {

    DisplayContent=null
    switch(this.props.card.content.type) {
        case 'basic':
            DisplayContent = <BasicLayout content={this.props.card.content}  {... this.props}/>
        break;
        case 'question':
            DisplayContent = <QuestionLayout content={this.props.card.content}  {... this.props}/>
        break;
        default:
        DisplayContent=<div></div>;
    }

    return(
        <div className="Side-Content">
            {DisplayContent}
        </div>
    )
  }
}
