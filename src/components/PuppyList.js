import React from 'react';
import PropTypes from 'prop-types';
import PuppyCard from './PuppyCard';
import { CardDeck } from 'reactstrap';

const PuppyList = ({ puppies, adoptPuppy, loading }) => {
  // Generate the puppy card for each puppy
  const puppyCards = puppies.map((puppy) => (
    <PuppyCard
      puppy={puppy}
      key={puppy.id}
      adoptPuppy={() => adoptPuppy(puppy.id)}
    />
  ))

  // Fallback content if no puppies
  const noPuppies = <p className="text-muted">Oops no puppies...</p>

  return (
    <div className="PuppyList">
      <h2>Our Puppies</h2>
      <CardDeck>
        {loading && <p>Loading...</p>}
        {!loading && (puppies.length > 0 ? puppyCards : noPuppies)}
      </CardDeck>
    </div>
  )
}

PuppyList.propTypes = {
  puppies: PropTypes.array.isRequired,
  adoptPuppy: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default PuppyList;
