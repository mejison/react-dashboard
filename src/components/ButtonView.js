import React from 'react';

const ButtonView = ({ changeView, show, title, icon: Icon }) => {
  return (
    <div
      className={`button-wrapper d-flex justify-content-between align-items-center ${ show ? 'active-button' : ''}`}
      onClick={!show ? changeView : null}
    >
      <div>
        <p>{title}</p>
      </div>
      <div className="d-flex align-items-center">
        <Icon />
      </div>
    </div>
  );
};

export default ButtonView;
