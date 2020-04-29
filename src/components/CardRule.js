import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from './icons';

const CardRule = ({ title, total, percent, success, before }) => {
  const colorResult = success ? 'success' : 'danger';
  return (
    <div className="card-rule">
      <div className="section-top d-flex justify-content-between">
        <div>
          <h5 className="title">{title}</h5>
          <p className="total">{total}</p>
        </div>
        <div className="d-flex align-items-end">
          <div className="d-flex">
            <div className="d-flex align-items-center">
              { success ? <ArrowUpIcon fill="#00C165" /> : <ArrowDownIcon fill="#F64D4D" />}
            </div>
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
