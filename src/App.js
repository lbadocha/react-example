import React, {Component} from 'react';
import './App.css';

import H2 from './H2';
import Paragraph from './Paragraph';
import Input from './Input';

class App extends Component {


  constructor() {
    super();

    this.state = {
      paragraphText: 'To jest tekst ze stanu - test'
    }
  }

  setParagraphText = (event) => {
    this.setState({paragraphText: event.target.value})
  }

  render() {
    return ( 
      <div className="App">
        <H2 title="Mój nagłówek h2 w ReactJS" />
        <Paragraph text={this.state.paragraphText} />
        <Input setText={this.setParagraphText} />
      </div>
    );
  }
  
}

export default App;
