import React, { Component } from 'react';
// Import Layout Components
import Header from "../dom/Header";
import BodyCopy from "../dom/BodyCopy";
import Footer from "../dom/Footer";
import FlipCards from "../dom/flipcard";
import SocialBar from "../dom/CTA_SocialShare_Bar";

// Use this component to build up the Project Layout
export default class Main extends Component {
  render() {
    return (
        <div className="container-fluid" id="Glabs">
            <Header     {... this.props} />
            <BodyCopy    Copy={this.props.UI.Data.BodyCopy.slice(0, 5)}/>
            <FlipCards  {... this.props} />   
            <SocialBar  {... this.props} />
            <Footer     {... this.props} /> 
        </div>
        ) 
  }
}
