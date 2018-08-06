import React from 'react';
import Button from '@material-ui/core/Button';
import {GA} from "../../../actions/ga";

export default class Card extends React.Component {
  render() {
   
    if(this.props.cta !== undefined){
      return(
          <div className="col-12 text-center" id="CTA">
            <Button 
                variant="outlined" 
                href={this.props.cta.location} 
                className="Button_Action_CTA" 
                onClick={()=>{GA('Interactive Card Click',this.props.cta.Label,this.props.cta.location)} }
            > 
                  {this.props.cta.Label} 
                  <span className="chevron right"></span>
            </Button> 
          </div>
      )
    }
    else{
      return(<div></div>)
    }
  }
}
