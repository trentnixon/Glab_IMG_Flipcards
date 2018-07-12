
import React from 'react';
import Button from '@material-ui/core/Button';

export default class Card extends React.Component {

  componentWillMount(){ }

  render() {
    return(
        <Button 
            variant="fab" 
            size="small"
            href="https://www.theguardian.com/guardian-labs-australia" 
            className="Button_Action_PZ" > 
            <i className="material-icons"> reorder </i>
        </Button>
      )
  }
}
