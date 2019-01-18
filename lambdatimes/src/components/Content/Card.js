import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`
const CardHeadline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`
const CardAuthor = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`
const CardImgContainter = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
` 
const CardImg = styled.img`
  width: 40px;
`
const CardSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Card = props => {
  return (
    <CardContainer>
      <CardHeadline>{props.card.headline}</CardHeadline>
      <CardAuthor className="author">
        <CardImgContainter>
          <CardImg src={props.card.img} alt={"icon of author"}/>
        </CardImgContainter>
        <CardSpan>By {props.card.author}</CardSpan>
      </CardAuthor>
    </CardContainer>
  );
};

Card.propTypes = {
  headline: PropTypes.string,
  tab: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string,
};
export default Card;
