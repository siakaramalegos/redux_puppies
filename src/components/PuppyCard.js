import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import AdoptButton from './AdoptButton';

const PuppyCard = ({ puppy, adoptPuppy }) => {
  const { name, breed, available, pictureHref } = puppy
  const imgSrc = pictureHref ? pictureHref : 'https://i.pinimg.com/736x/94/98/5e/94985efcaacf11493244be3585b85ced--so-funny-funny-dogs.jpg'

  return (
    <Card>
      <CardImg top width="100%" src={imgSrc} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{breed}</CardSubtitle>
        <AdoptButton available={available} onClick={adoptPuppy} />
      </CardBody>
    </Card>
  )
}

PuppyCard.propTypes = {
  puppy: PropTypes.object.isRequired,
  adoptPuppy: PropTypes.func.isRequired,
}

export default PuppyCard
