import React from 'react';
import SponsorTop from "../components/Header/SponsorTop";

// import OpenAll from "../components/Btns/openAll";

// Styling for this Compoent can be found in the CSS Folders
export default class CreateCard extends React.Component {
  componentWillMount(){ }
  render() {
    return(
        <div className="row" id="Header">
            <div className="container">
                <SponsorTop {... this.props}/>
                <div className="col-12">
                    <h1>{this.props.UI.Data.ProjectHeader}</h1>
                    <p>{this.props.UI.Data.ProjectCopy}</p>
                    
                </div>
            </div>
        </div>
    )
  }
}
 