import React, { Component } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import Carousel from '../Carousel/Carousel';
import Cards from './Cards';
import { tabData, cardData } from '../../data';

const ContentContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData,
    })
  }

  changeSelected = tab => {
    this.setState({
      selected: tab,
    })
  };

  filterCards = () => {
    let cardArray = [];
    this.state.selected === 'all' 
      ? cardArray=this.state.cards 
      : cardArray=this.state.cards.filter(card => card.tab === this.state.selected);
    return cardArray;
  };

  render() {
    return (
      <ContentContainer>
        <Tabs 
          tabs={this.state.tabs} 
          selectedTab={this.state.selected}
          selectedTabHandler={this.changeSelected}
        />
        <Carousel />
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}
