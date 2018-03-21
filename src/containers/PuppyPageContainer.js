import { connect } from 'react-redux';
import { adoptPuppy } from '../actions';
import PuppyCard from '../components/PuppyCard';

const mapStateToProps = (state, ownProps) => {
  const puppyId = parseInt(ownProps.match.params.id, 10)
  const puppy = state.puppies.filter(puppy => (
    puppy.id === puppyId
  ))[0]

  return { puppy }
}

const mapDispatchToProps = (dispatch) => {
  return {
    adoptPuppy: (id) => dispatch(adoptPuppy(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuppyCard)