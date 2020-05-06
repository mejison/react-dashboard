import React from 'react';

const Tooltip = ({ content, show }) => {          
  return (
    <div className={`custom-tooltip ${show ? 'active' : ''}`} dangerouslySetInnerHTML={{__html: content}}></div>
  );
};

export default Tooltip;
