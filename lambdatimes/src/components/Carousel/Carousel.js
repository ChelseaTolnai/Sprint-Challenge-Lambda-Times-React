import React, { Component } from 'react';
import styled from 'styled-components';
import { carouselData } from '../../data'

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  @media (min-width: 1200px) {
    width: 1200px;
  }
`
const CarouselBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: ${props => props.btn.left};
  right: ${props => props.btn.right};
  transform: translate(0, -50%);
  width: 50px;
  height: 50px;
  cursor: pointer;
    :hover {
      color: #333;
      background-color: #fff;
      border: 2px solid #333;
    }
`

const left = {
  left: "25px"
};

const right = {
  right: "25px"
};

const CarouselImg = styled.img`
  width: 100%;
  display: none;
`

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      index: 0,
    }
  }

  componentDidMount(){
    this.setState({
      data: carouselData,
    })
  }

  leftClick = () => {
    if (this.state.index <= 0) {
      this.setState({
        index: this.state.data.length
      })
    }
    this.setState(state => ({
      index: --state.index
    }))
  }

  rightClick = () => {
    if (this.state.index >= this.state.data.length-1) {
      this.setState({
        index: -1
      })
    }
    this.setState(state => ({
      index: ++state.index
    }))
  }

  selectedImage = () => {
    return <CarouselImg src={this.state.data[this.state.index]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <CarouselContainer>
        <CarouselBtn btn={left} onClick={this.leftClick}>{"<"}</CarouselBtn>
        {this.selectedImage()}
        <CarouselBtn btn={right} onClick={this.rightClick}>{">"}</CarouselBtn>
      </CarouselContainer>
    )
  }
}