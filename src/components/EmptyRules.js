import React from "react";

const EmptyRules = () => {
  return (
    <div>
      <h4 className="card-title">No Rules Defined</h4>
      <p className="card-text">
        Simulate and optimize your prices by creating rules in just 3 steps.
      </p>
      <div className="img-wrapper">
        <img href="#" alt="empty img" />
      </div>
      <div className="row mb-3">
        <div className="circleNumber col-3 text-secondary">1</div>
        <div className="col-9">Select the time frame</div>
      </div>
      <div className="row mb-3">
        <div className="circleNumber col-3 text-secondary">2</div>
        <div className="col-9">Specify your objectives</div>
      </div>
      <div className="row mb-3">
        <div className="circleNumber col-3 text-secondary">3</div>
        <div className="col-9">Reach your goals and grow your business</div>
      </div>
    </div>
  );
};

export default EmptyRules;
