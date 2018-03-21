import React, { Component } from 'react';
import { connect } from 'react-redux';
import PuppyList from '../components/PuppyList';
import { adoptPuppy } from '../actions';

class PuppyListContainer extends Component {
  render() {
    return <PuppyList {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    puppies: state.puppies,
    loading: state.loading.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    adoptPuppy: (id) => { dispatch(adoptPuppy(id)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuppyListContainer)
