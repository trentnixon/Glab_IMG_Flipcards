import React from 'react';

// React component for the front side of the card
export default class CardBack extends React.Component {
    componentWillMount(){ }
  render() {
    return(
        <div className='card-side side-back'
                style={{
                    backgroundColor:this.props.card.bgColor,
                    backgroundImage:"url("+this.props.card.bgImage+")"
                }}
        >
            <div className='container-fluid'
            >
                <div className='row'>
                    <div className='side-back-content'>
                            <h2>{this.props.card.title}</h2>
                            <p>{this.props.card.content}</p>
                    </div>
                </div>
            </div>
            <button  onClick={this.props.onChange.bind(this)}  >View Front</button>
        </div>
    )
  }
}
