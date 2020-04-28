import React from 'react';
import * as icons from './icons';

const CardRule = ({ title, total, percent, success, before }) => {
  const colorResult = success === true ? 'success' : 'danger';
  const arrowIcon =
    success === true ? (
      <icons.ArrowUpIcon fill="#00C165" />
    ) : (
      <icons.ArrowDownIcon fill="#F64D4D" />
    );

  return (
    <div className="card-rule">
      <div className="section-top d-flex justify-content-between">
        <div>
          <h5 className="title">{title}</h5>
          <p className="total">{total}</p>
        </div>
        <div className="d-flex align-items-end">
          <div className="d-flex">
            <div className="d-flex align-items-center">{arrowIcon}</div>
            <p className={`total-percent px-1 ${colorResult}`}>
              {percent}
              <span>%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="section-bottom">
        <p className="subtitle">Before Rules Applied</p>
        <p className="before">{before}</p>
      </div>
    </div>
  );
};

export default CardRule;
