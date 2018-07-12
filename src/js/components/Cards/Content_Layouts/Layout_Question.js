import React from 'react';
import Button from '@material-ui/core/Button';

export default class Card extends React.Component {

  componentWillMount(){ console.log(this.props) }

  constructor(props) {
    super(props)
    this.CheckAnswer = this.CheckAnswer.bind(this)
  }

  CheckAnswer(answer, i){

      let button = document.getElementById(i);
     
      if(answer === 1){
        button.classList.add("correct");
        this.props.onChange()
        
      }
      else if(answer === 0 ){
        button.classList.add("wrong");
      }
  }

   makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
 

  render() {
    return(
       <div>
            <h2>{this.props.content.header}</h2>
            <h3>{this.props.content.subheader}</h3>
            <p dangerouslySetInnerHTML={ { __html: this.props.content.copy} }></p>
           
{
    this.props.content.Answers.map((Answer,i)=>{
       let CreateID = this.makeid();
            return(
                <div key={i}>
                    <Button 
                        id={CreateID}
                        variant="outlined" 
                        onClick={this.CheckAnswer.bind(this, Answer.value, CreateID)} 
                        className="Button_Answer"  
                    >
                        {Answer.label} 
                    </Button>
                </div>
            )
    })
}
        </div>
    )
  }
}
