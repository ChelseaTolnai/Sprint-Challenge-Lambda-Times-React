import React from 'react';
import styled from 'styled-components';

const TopBarComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  }
    @media (min-width: 1280px) {
      width: 1280px;
    }
`
const LeftContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
    span {
      cursor: pointer;
      margin-right: 25%;
      font-weight: bold;
    }
`
const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
    span {
      cursor: pointer;
      margin-right: 5%;
    }
    span:last-child {
      margin-right: 0;
    }
    span:hover {
      text-decoration: underline;
    }
`
const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
    span {
      cursor: pointer;
    }
`


const TopBar = () => {
  return (
    <TopBarComponent>
      <TopBarContainer>
        <LeftContainer>
          <span>TOPICS</span><span>SEARCH</span>
        </LeftContainer>
        <CenterContainer>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </CenterContainer>
        <RightContainer>
          <span>LOG IN</span>
        </RightContainer>
      </TopBarContainer>
    </TopBarComponent>
  )
}

export default TopBar;