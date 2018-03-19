import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import PuppyListContainer from './containers/PuppyListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <Container>
            <h1 className="display-3">Pug Life</h1>
            <p className="lead">Poo what you gotta poo.</p>
          </Container>
        </Jumbotron>
        <Container>
          <PuppyListContainer />
        </Container>
      </div>
    );
  }
}

export default App;
