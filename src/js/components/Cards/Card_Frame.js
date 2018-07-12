import React from 'react';
import CardBasicLayout from "./Card_Layout_Basic";
import { openall,TrackOpen } from "../../../actions/actions";
import { Animated } from "react-animated-css";
import { GA } from "../../../actions/ga";

let FlipState ='front';
// React component for the card (main component)
export default class Card extends React.Component {

  // eslint-disable-next-line   
  constructor(props) { 
    super(props); 
    this.state = {flip: true};
    this.flipMe = this.flipMe.bind(this);
  }

  componentWillMount(){ }
  shouldComponentUpdate(nextProps, nextState){ return true;}
  componentWillUpdate(nextProps, nextState){ 
    if(nextProps.UI.SETFLIP === true){
        // Set UI to False      
        openall(false)
        if(nextProps.UI.FLIPSTATE === false){ this.SetNewState(false)}
        else if(nextProps.UI.FLIPSTATE === true){ this.SetNewState(true)}
    }
  }
   
  SetNewState(state){
    this.setState({ flip: state });
    TrackOpen(this.props.i, this.props.UI.TrackOpenCards);
  } 

  flipMe(){
      // Set Flip State
      if(this.state.flip === false){ this.SetNewState(true) }
      else{ this.SetNewState(false) }
      // Fire GA Event
      GA('Interactive Card Flipped',"Flipped to "+FlipState, "Card Number "+ this.props.i)

   }

  render() {
    
    // Set the Cards Facing Class
    if(this.state.flip === false){ FlipState = 'back'; }
    else{ FlipState = 'front';  }

    return(
        <Animated animationIn="zoomIn" animationOut="fadeInUp" animationInDelay={this.props.delay} isVisible={true}>
            <div className={'card-container ' + FlipState}>
                <div className='card-body'>
                    <CardBasicLayout 
                        card={this.props.card.back}
                        onChange={this.flipMe}
                        SideClass="side-back"
                        FlipIcon="cached"
                    />
                    <CardBasicLayout 
                        card={this.props.card.front}
                        onChange={this.flipMe}
                        SideClass="side-front"
                        FlipIcon="cached"
                    />
                </div>
            </div>
        </Animated>
    )
  }
}
