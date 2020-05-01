import React from 'react';

const Badge = ({ title, level = 'secondary' }) => {
  return <div className={`badge badge-${level}`}>{title}</div>;
};

export default Badge;
