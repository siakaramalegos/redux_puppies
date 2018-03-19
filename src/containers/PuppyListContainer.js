import React, { Component } from 'react';
import { connect } from 'react-redux';
import PuppyList from '../components/PuppyList';
import { adoptPuppy, fetchPuppies } from '../actions';

class PuppyListContainer extends Component {
  componentDidMount() {
    this.props.fetchPuppies()
  }

  render() {
    return <PuppyList {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return { puppies: state.puppies }
}

const mapDispatchToProps = (dispatch) => {
  return {
    adoptPuppy: (id) => { dispatch(adoptPuppy(id)) },
    fetchPuppies: () => { dispatch(fetchPuppies()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuppyListContainer)
