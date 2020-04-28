import React from "react";

const CardRule = ({ title, total, percent, success, before }) => {
  return (
    <div className="card-rule">
      <div className="card-rule-top d-flex justify-content-between">
        <div>
          <h5 className="card-rule-title">{title}</h5>
          <p className="total">{total}</p>
        </div>
        <div className="d-flex align-items-end">
          <p>arrowIcon</p>
          <p className="px-1">
            {percent}
            <span>%</span>
          </p>
        </div>
      </div>
      <div className="card-rule-bottom">
        <p className="card-rule-subtitle">Before Rules Applied</p>
        <p className="before">{before}</p>
      </div>
    </div>
  );
};

export default CardRule;
