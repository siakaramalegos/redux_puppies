import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

// If the puppy is availabe, show an Adopt Me! button.
// If not, show disabled button.
const AdoptButton = ({ available, onClick }) => (
  <Button color="primary" disabled={!available} onClick={onClick}>
    {available ? 'Adopt me!' : 'Adopted'}
  </Button>
)

AdoptButton.propTypes = {
  available: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default AdoptButton
