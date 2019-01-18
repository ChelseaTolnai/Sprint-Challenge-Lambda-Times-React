import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {

  const findClassName = props => 
    props.tab === props.selectedTab 
    ? 'tab active-tab'
    : 'tab'
  ;
  
  return (
    <div
      className={findClassName(props)}
      onClick={ () => props.selectedTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectedTabHandler: PropTypes.func,
};
export default Tab;
