import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Container, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import PuppyListContainer from './containers/PuppyListContainer';
import PuppyPageContainer from './containers/PuppyPageContainer';
import { fetchPuppies } from './actions';

const Home = () => (
  <Jumbotron>
    <Container>
      <h1 className="display-3">Pug Life</h1>
      <p className="lead">Poo what you gotta poo.</p>
    </Container>
  </Jumbotron>
)

const PuppiesPage = () => (
  <Container>
    <PuppyListContainer />
  </Container>
)

const styles = {
  activeNav: { color: '#ccc' },
  nav: { padding: '20px' }
}

class App extends Component {
  componentDidMount() {
    this.props.fetchPuppies()
  }

  render() {
    return (
      <Router className="App">
        <div>
          <Container>
            <Nav style={{ marginTop: '20px', marginBottom: '40px' }}>
              <NavItem>
                <NavLink
                  exact to="/"
                  activeStyle={styles.activeNav}
                  style={styles.nav}
                >
                  Home
              </NavLink>&nbsp;
            </NavItem>
              <NavItem>
                <NavLink to="/puppies" activeStyle={styles.activeNav} style={styles.nav}>Puppies</NavLink>
              </NavItem>
            </Nav>
          </Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/puppies" component={PuppiesPage} />
            <Route path="/puppies/:id" component={PuppyPageContainer} />
            <Route render={() => <h1>Oopsy! Page not found.</h1>} />
          </Switch>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/puppies">Puppies</Link>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchPuppies: () => dispatch(fetchPuppies()) }
}

export default connect(null, mapDispatchToProps)(App);
