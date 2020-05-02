import React from 'react';

const CardDescription = ({title, content}) => {
  return (
    <div className="card-description">
  		<div className="title">{title}</div>
  		<div className="content">{content}</div>
    </div>
  )
}

export default CardDescription
