import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
          {props.tabs.map( tab => {
            return (
              <Tab 
                key={tab}
                tab={tab} 
                selectedTab={props.selectedTab}
                selectedTabHandler={props.selectedTabHandler}
              />
            )
          })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  selectedTab: PropTypes.string,
  selectedTabHandler: PropTypes.func,
};
export default Tabs;
