import React from 'react';
import Button from '@material-ui/core/Button';

import {GA} from "../../../actions/ga";
import { openall } from "../../../actions/actions";

export default class Card extends React.Component {

    openAll(){ 
            openall(true);
            GA('Interactive Card Flipped', "Flipped to Global", "All Cards Turned")
       }

    render() {
        return(
            <Button 
                variant="fab" 
                className="OpenAll" 
                onClick={()=>{this.openAll()} }
            > 
                
                <i className="material-icons"> rotate_90_degrees_ccw </i>
            </Button>
      )
  }
}