import React, {useState} from 'react';
import ExistRuleItem from './ExistRuleItem';
import Button from './buttons/BtnMain'

const ExistRules = () => {
  let [values, setValues] = useState([false, false, false])
  
  const handleChange = (index, value) => {
    const changesValue = values.map((item, i) => i == index ? value : item)
    setValues(changesValue)
  }

  return (
    <div className="rule-list-container">
      <div className="mb-4">
        <Button title="Add Rules" IconLeft="PlusIcon" variant="dashed" className="btn-block" />
      </div>
      {
        values.map((item, i) => {
          return <ExistRuleItem value={item} key={i} onChange={(value) => { handleChange(i, value) }} />
        })
      }
    </div>
  );
};

export default ExistRules;
