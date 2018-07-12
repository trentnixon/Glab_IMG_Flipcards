import React, { Component } from 'react';
import {GA} from "../../../actions/ga";
export default class Header extends Component {

  render() {
    return ( 
            <a 
                href="https://google.com" 
                className="ReadMore"
                onClick={()=>{GA('Link Clicked','CTA Bar','https://google.com')} }
            >
                Add a Call to Action for <strong>This: Project</strong> <span className="chevron right"></span>
            </a>
        );
    } 
} 