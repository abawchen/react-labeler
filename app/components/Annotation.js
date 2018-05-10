import React from 'react';
import ReactDOM from 'react-dom';

const Annotation = ({
  annotation
}) => (
  <div>
    {annotation.get('label')}
  </div>
)

export default Annotation;
