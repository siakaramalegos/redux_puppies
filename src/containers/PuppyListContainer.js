import { connect } from 'react-redux';
import PuppyList from '../components/PuppyList';
import { adoptPuppy } from '../actions';

const mapStateToProps = (state) => {
  return { puppies: state.puppies }
}

const mapDispatchToProps = (dispatch) => {
  return {
    adoptPuppy: (id) => { dispatch(adoptPuppy(id)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuppyList)
