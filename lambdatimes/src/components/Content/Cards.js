import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
    @media (min-width: 1200px) {
      width: 1200px;
    }
`

const Cards = props => {
  return (
    <CardsContainer>
      {props.cards.map( card => {
        return (
          <Card 
            key={card.headline}
            card={card} 
          />
        )
      })}
    </CardsContainer>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  }))
};
export default Cards;