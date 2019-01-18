import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabComponent = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color:  ${props => props.tab.color};
  background-color: ${props => props.tab.bg};
  border: ${props => props.tab.border};
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
    :hover {
      text-decoration: underline;
    }
`
const tab = {
  color: "#fff",
  bg: "#333",
};

const activeTab = {
  color: "#333",
  bg: "#fff",
  border: "2px solid #333",
};

const Tab = props => {

  const findClassName = props => 
    props.tab === props.selectedTab 
    ? activeTab
    : tab
  ;
  
  return (
    <TabComponent
      tab={findClassName(props)}
      onClick={ () => props.selectedTabHandler(props.tab)}
    >       
      {props.tab.toUpperCase()}
    </TabComponent>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectedTabHandler: PropTypes.func,
};
export default Tab;
