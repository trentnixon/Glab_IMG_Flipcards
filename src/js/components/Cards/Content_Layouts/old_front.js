import React from 'react';

// React component for the front side of the card
export default class CardFront extends React.Component {

  
  changeHandler(){}
  render() {
    return(
      <div className={'card-side ' + this.props.SideClass}
          style={{
              backgroundColor:this.props.card.bgColor,
              backgroundImage:"url("+this.props.card.bgImage+")"
            }}
      >
        <div className='container-fluid'>
          <div className='row'>
            <div className='side-front-content'>
              <div className="Side-Banner" >
                  <img src={this.props.card.bannerImage} alt="" className="BannerImage" />
              </div>
             <div className="side-Content">
                <h2>{this.props.card.title}</h2>
                <p>{this.props.card.content}</p>
                <button  onClick={this.props.onChange.bind(this)}  >View Back</button>
             </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
