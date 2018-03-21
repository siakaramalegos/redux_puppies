import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import AdoptButton from './AdoptButton';

const PuppyCard = ({ puppy, adoptPuppy }) => {
  if (!puppy.name) {
    return <h1>Oops no puppy found</h1>
  }

  const { name, breed, available, pictureHref, id } = puppy
  const imgSrc = pictureHref ? pictureHref : 'https://i.pinimg.com/736x/94/98/5e/94985efcaacf11493244be3585b85ced--so-funny-funny-dogs.jpg'

  return (
    <Card>
      <CardImg top width="100%" src={imgSrc} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{breed}</CardSubtitle>
        <CardText>
          <Link to={`/puppies/${id}`}>Show details</Link>
        </CardText>
        <AdoptButton available={available} onClick={adoptPuppy} />
      </CardBody>
    </Card>
  )
}

PuppyCard.defaultProps = {
  puppy: {}
}

PuppyCard.propTypes = {
  puppy: PropTypes.object.isRequired,
  adoptPuppy: PropTypes.func.isRequired,
}

export default PuppyCard
