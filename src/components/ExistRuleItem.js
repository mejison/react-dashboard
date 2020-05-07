import React, {useState} from 'react';
import Card from './Card'
import { FletCalendarIcon } from './icons'
import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
import { ThreeTods } from './icons'

const ExistRuleItem = ({value, onChange}) => {
  return (
    <div className="exist-rule-item">
      <Card className="card-rule-exist">
        <div className="card-body">
          <div className="title">
            Rule 1 with relatively long ...
          </div>
          <div className="point-of-sale">
            Point Of Sale
            <span className="points-selcted">8</span>
          </div>
          <div className="period">
            <FletCalendarIcon fill="#607990" /> <span className="ml-2">02 Mar - 30 May</span>
          </div>
        </div>
        <div className="footer-card">
          <ToggleSwitch value={value} onChange={onChange} />
          <div className="exist-rule-action">
            <ThreeTods fill="#607990" />
          </div>
        </div>        
      </Card>
    </div>
  );
};

export default ExistRuleItem;
