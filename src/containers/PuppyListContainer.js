import React, { Component } from 'react';
import { connect } from 'react-redux';
import PuppyList from '../components/PuppyList';
import { adoptPuppy, fetchPuppies } from '../actions';

class PuppyListContainer extends Component {
  componentDidMount() {
    this.props.fetchPuppies()
  }

  render() {
    const { fetchPuppies, ...rest } = this.props
    return <PuppyList {...rest} />
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
    fetchPuppies: () => { dispatch(fetchPuppies()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuppyListContainer)
