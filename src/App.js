import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import PuppyList from './components/PuppyList';
const puppies = require('./puppies.json')

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <Container>
            <h1>Pug Life</h1>
            <p className="lead">Poo what you gotta poo.</p>
          </Container>
        </Jumbotron>
        <Container>
          <PuppyList puppies={puppies} />
        </Container>
      </div>
    );
  }
}

export default App;
