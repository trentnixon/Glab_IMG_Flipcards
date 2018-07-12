import React from 'react';
import BeforeAfterSlider from 'react-before-after-slider'
 
export default class Card extends React.Component{


  componentWillMount(){}
  render () {
    console.log(this.props.src)
    const before = this.props.src[0]
    const after = this.props.src[1]
 
    return (
      <BeforeAfterSlider
            before={before}
            after={after}
            width={600}
            height={400}
            className="BeforeAfterSlider"
      />
    )
  }
}
