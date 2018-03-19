import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>Pug Life</h1>
          <p className="lead">Poo what you gotta poo.</p>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
